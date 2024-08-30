import { Component, OnInit } from '@angular/core';
import { ImpactService } from '../../services/impact.service';
import Chart from 'chart.js/auto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-impact-analysis',
  templateUrl: './impact-analysis.component.html',
  styleUrls: ['./impact-analysis.component.scss'],

})

export class ImpactAnalysisComponent implements OnInit {

  orgName: any = "";
  data: any = [];
  public chart: any;
  public langChart: any;
  public langUserChart: any;
  public editorChart: any;
  public editorUserChart: any;
  xlabel: string[] = [];
  total_suggestions_count: any = [];
  total_acceptances_count: any = [];
  total_lines_suggested: any = [];
  total_lines_accepted: any = [];
  total_active_users: any = [];
  total_chat_acceptances: any = [];
  total_chat_turns: any = [];
  total_active_chat_users: any = [];

  cards: any;

  constructor(private impactService: ImpactService) { }

  ngOnInit(): void {
    this.orgName = environment.orgName;
    // create chart
    this.getData();
  }

  getData() {

    // get data from service
    this.impactService.getCopilotUsageData().subscribe((data: any) => {
      // console.log(data);
      this.data = data;
      sessionStorage.setItem('orgData', JSON.stringify(data));
      this.createChart();
    });
  }

  createChart() {
    let avgActiveUsers=0;
    let totalSuggestions=0;
    let totalAccepted=0;
    let totalChats=0;
    let count=0;
    
    // extract the day field from the data
    this.data.forEach((element: any) => {
      this.xlabel.push(element.day);
      this.total_suggestions_count.push(element.total_suggestions_count);
      this.total_acceptances_count.push(element.total_acceptances_count);
      this.total_lines_suggested.push(element.total_lines_suggested);
      this.total_lines_accepted.push(element.total_lines_accepted);
      this.total_active_users.push(element.total_active_users);
      this.total_chat_acceptances.push(element.total_chat_acceptances);
      this.total_chat_turns.push(element.total_chat_turns);
      this.total_active_chat_users.push(element.total_active_chat_users);
      count+=1;
      avgActiveUsers += element.total_active_users;
      totalSuggestions += element.total_suggestions_count;
      totalAccepted += element.total_acceptances_count;
      totalChats += element.total_chat_turns;
    });

    this.cards = [
      {title: 'Average Active Users', subtitle: Math.round(avgActiveUsers/count), content: 'Average number of Active Users for the last 28 days'},
      {title: 'Total Suggestions', subtitle: totalSuggestions, content: 'The total number of suggestions offered by Copilot for all developers in last 28 days'},
      {title: 'Total Acceptance', subtitle: totalAccepted, content: 'The total number of suggestions accepted by users in last 28 days'},
      {title: 'Total Chats', subtitle: totalChats, content: 'The total number of chats interact with users in last 28 days'}
    ];

		// Code Completion
		this.chart = new Chart("cognitive-impact-chart", {
			type: 'line', //this denotes tha type of chart

			data: {// values on X-Axis
			labels: this.xlabel,
			datasets: [
				{
				label: "Acceptance Count / Suggestion Count",
				data: this.total_acceptances_count.map((value: number, index: number) => value / this.total_suggestions_count[index] * 100)
				},
				{
				label: "Lines Accepted / Lines Suggested",
				data: this.total_lines_accepted.map((value: number, index: number) => value / this.total_lines_suggested[index] * 100)
				}
			]
			}

		});

		// Engagement
    this.chart = new Chart("flow-impact-chart", {
      type: 'bar',

      data: {
        labels: this.xlabel,
        datasets: [
          {
            label: "Suggestions Count / Active Users",
            data: this.total_suggestions_count.map((value: number, index: number) => value / this.total_active_users[index])
          }
					// ,{
          //   label: "Lines Suggested / Active Users",
          //   data: this.total_lines_suggested.map((value: number, index: number) => value / this.total_active_users[index])
          // }
					,{
					label: "Chat Turns / Active Chat Users",
					data: this.total_chat_turns.map((value: number, index: number) => value / this.total_active_chat_users[index])
					}
        ]
      },
			options: {
				scales: {
					x: {
						stacked: true
					},
					y: {
						stacked: true
					}
				}
			}
    });

		// Adaptability
    this.chart = new Chart("feedback-impact-chart", {
      type: 'line',

      data: {
        labels: this.xlabel,
        datasets: [
					// {
					// label: "Chat Turns",
					// data: this.total_chat_turns
					// },
					{
					label: "Chats Accepted / Chat Turns",
					data: this.total_chat_acceptances.map((value: number, index: number) => value / this.total_chat_turns[index] * 100)
					}
        ]
      }
    });

  }

}
