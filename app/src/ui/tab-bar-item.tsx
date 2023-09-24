import { TestNotificationFlow, TestNotificationStepResultMap } from './test-notifications/test-notifications';

import { IAPIComment } from '../lib/api';
import { ValidNotificationPullRequestReview } from '../lib/valid-notification-pull-request-review';
import { PullRequest } from '../models/pull-request';
import { RowIndexPath } from './lib/list/list-row-index-path';


export interface ITestNotificationsState {
  readonly selectedFlow: TestNotificationFlow | null
  readonly stepResults: TestNotificationStepResultMap
  readonly loading: boolean
  readonly pullRequests: ReadonlyArray<PullRequest>
  readonly reviews: ReadonlyArray<ValidNotificationPullRequestReview>
  readonly comments: ReadonlyArray<IAPIComment>
  readonly selectedRows: ReadonlyArray<RowIndexPath>
}
