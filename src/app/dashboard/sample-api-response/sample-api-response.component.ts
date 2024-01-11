import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-api-response',
  templateUrl: './sample-api-response.component.html',
  styleUrls: ['./sample-api-response.component.scss']
})
export class SampleApiResponseComponent {
  sample_usage_api_response: any;
  sample_seats_api_response: any;

  ngOnInit(): void {
    this.sample_usage_api_response = [
      {
        "total_suggestions_count": 10305,
        "total_acceptances_count": 2515,
        "total_lines_suggested": 21604,
        "total_lines_accepted": 4885,
        "total_active_users": 120,
        "day": "2023-12-07",
        "breakdown": [
          {
            "language": "bat",
            "editor": "vscode",
            "suggestions_count": 3,
            "acceptances_count": 0,
            "lines_suggested": 3,
            "lines_accepted": 0,
            "active_users": 1
          },
          {
            "language": "gdscript",
            "editor": "vscode",
            "suggestions_count": 83,
            "acceptances_count": 9,
            "lines_suggested": 333,
            "lines_accepted": 9,
            "active_users": 2
          }
        ]
      },
      {
        "total_suggestions_count": 6378,
        "total_acceptances_count": 1716,
        "total_lines_suggested": 15311,
        "total_lines_accepted": 3507,
        "total_active_users": 99,
        "day": "2023-12-08",
        "breakdown": [
          {
            "language": "gdscript",
            "editor": "vscode",
            "suggestions_count": 56,
            "acceptances_count": 4,
            "lines_suggested": 129,
            "lines_accepted": 5,
            "active_users": 2
          },
          {
            "language": "git-commit",
            "editor": "vscode",
            "suggestions_count": 7,
            "acceptances_count": 1,
            "lines_suggested": 9,
            "lines_accepted": 1,
            "active_users": 2
          }
        ]
      }
    ];

    this.sample_seats_api_response={
      "total_seats": 2,
      "seats": [
          {
              "created_at": "2023-08-29T05:20:55+05:30",
              "assignee": {
                  "login": "user1",
                  "id": 3992,
                  "node_id": "MDQ6VXNlcHHMM",
                  "avatar_url": "https://avatars.githubusercontent.com/u/3992?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/user1",
                  "html_url": "https://github.com/user1",
                  "followers_url": "https://api.github.com/users/user1/followers",
                  "following_url": "https://api.github.com/users/user1/following{/other_user}",
                  "gists_url": "https://api.github.com/users/user1/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/user1/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/user1/subscriptions",
                  "organizations_url": "https://api.github.com/users/user1/orgs",
                  "repos_url": "https://api.github.com/users/user1/repos",
                  "events_url": "https://api.github.com/users/user1/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/user1/received_events",
                  "type": "User",
                  "site_admin": true
              },
              "updated_at": "2024-01-03T13:30:00+05:30",
              "pending_cancellation_date": null,
              "last_activity_at": "2023-12-23T14:26:03+05:30",
              "last_activity_editor": "vscode/1.86.0-insider/copilot-chat/0.12.2023122001"
          },
          {
              "created_at": "2023-08-29T05:20:55+05:30",
              "assignee": {
                  "login": "user2",
                  "id": 4215,
                  "node_id": "MDJJFNXNlQyMTU=",
                  "avatar_url": "https://avatars.githubusercontent.com/u/4215?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/user2",
                  "html_url": "https://github.com/user2",
                  "followers_url": "https://api.github.com/users/user2/followers",
                  "following_url": "https://api.github.com/users/user2/following{/other_user}",
                  "gists_url": "https://api.github.com/users/user2/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/user2/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/user2/subscriptions",
                  "organizations_url": "https://api.github.com/users/user2/orgs",
                  "repos_url": "https://api.github.com/users/user2/repos",
                  "events_url": "https://api.github.com/users/user2/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/user2/received_events",
                  "type": "User",
                  "site_admin": true
              },
              "updated_at": "2024-01-03T13:30:00+05:30",
              "pending_cancellation_date": null,
              "last_activity_at": "2024-01-10T11:37:16+05:30",
              "last_activity_editor": "vscode/1.85.1/copilot-chat/0.11.1"
          }
      ]
    };

  }
}
