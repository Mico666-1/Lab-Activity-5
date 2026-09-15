\# Foundation Day Event Digitization Project



\## Task A: Current System Observation

\### Observed Booths

1\. \*\*Attendance Booth:\*\* Manual pen-and-paper logbook for visitor sign-ins.

2\. \*\*Food Festival Booth:\*\* Paper stubs and physical tickets issued for food redemptions.

3\. \*\*Best Booth Competition:\*\* Paper ballots dropped into a physical voting box.



\### System Inefficiencies \& Problems

\* \*\*Queuing Bottlenecks:\*\* Physical sign-ins slow down entry during peak hours.

\* \*\*Data Loss \& Corruption:\*\* Paper logbooks can be misplaced, wet, or unreadable.

\* \*\*Delayed Metrics:\*\* Manual counting prevents real-time tracking of footfall and contest votes.



\---



\## Task B: Full-Stack Web Application Proposal

\### Stack

\* \*\*Frontend:\*\* React.js

\* \*\*Backend:\*\* Express.js + Node.js

\* \*\*Database:\*\* MongoDB



\### Frontend Features (Client Side)

\* \*\*Attendee Interface:\*\* Registration screen generating a personal QR code.

\* \*\*Staff Interface:\*\* Scanner portal for checking in attendees and redeeming food stubs.

\* \*\*Admin Dashboard:\*\* Live graphs displaying attendance and voting tallies.



\### Backend Data Architecture (Server Side)

\* \*\*Users Collection:\*\* `\_id`, `name`, `email`, `department`, `role`, `createdAt`

\* \*\*Booths Collection:\*\* `\_id`, `boothName`, `category`, `totalVotes`

\* \*\*Transactions Collection:\*\* `\_id`, `userId`, `boothId`, `type` (entry/vote/ticket), `timestamp`

