/* eslint-disable unicorn/no-null */
/* eslint-disable @typescript-eslint/naming-convention */
import { RspecExample } from '../../src';

export const rspecExamples2: RspecExample[] = [
  {
    id: './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb[1:1:1:1]',
    description: 'should trigger model event',
    full_description:
      "ModelEvents::InitialApplicationSubmitted when initial employer's application is approved ModelEvent should trigger model event",
    status: 'passed',
    file_path:
      './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb',
    line_number: 41,
    run_time: 1.870_422_442,
    pending_message: null,
  },
  {
    id: './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb[1:1:2:1]',
    description: 'should trigger notice event',
    full_description:
      "ModelEvents::InitialApplicationSubmitted when initial employer's application is approved Notice Trigger should trigger notice event",
    status: 'passed',
    file_path:
      './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb',
    line_number: 57,
    run_time: 1.775_709_695,
    pending_message: null,
  },
  {
    id: './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb[1:1:3:1:1]',
    description: 'should return correct data model',
    full_description:
      "ModelEvents::InitialApplicationSubmitted when initial employer's application is approved NoticeBuilder when notice event received should return correct data model",
    status: 'passed',
    file_path:
      './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb',
    line_number: 108,
    run_time: 1.874_914_751,
    pending_message: null,
  },
  {
    id: './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb[1:1:3:1:2]',
    description: 'should return employer legal name',
    full_description:
      "ModelEvents::InitialApplicationSubmitted when initial employer's application is approved NoticeBuilder when notice event received should return employer legal name",
    status: 'passed',
    file_path:
      './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb',
    line_number: 112,
    run_time: 1.847_270_706,
    pending_message: null,
  },
  {
    id: './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb[1:1:3:1:3]',
    description: 'should return plan year start date',
    full_description:
      "ModelEvents::InitialApplicationSubmitted when initial employer's application is approved NoticeBuilder when notice event received should return plan year start date",
    status: 'passed',
    file_path:
      './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb',
    line_number: 116,
    run_time: 1.864_679_449,
    pending_message: null,
  },
  {
    id: './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb[1:1:3:1:4]',
    description: 'should return broker status',
    full_description:
      "ModelEvents::InitialApplicationSubmitted when initial employer's application is approved NoticeBuilder when notice event received should return broker status",
    status: 'passed',
    file_path:
      './components/benefit_sponsors/spec/models/benefit_sponsors/model_events/initial_application_submitted_spec.rb',
    line_number: 120,
    run_time: 1.966_936_856,
    pending_message: null,
  },
];
