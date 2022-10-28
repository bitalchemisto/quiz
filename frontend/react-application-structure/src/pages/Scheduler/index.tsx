import * as React from 'react';
import Layout from 'layouts/Main';
import SchedulerContainer from 'containers/Scheduler/Container';

interface SchedulerProps {}

export const Scheduler: React.FunctionComponent<SchedulerProps> = () => {
  return (
    <Layout title='Scheduler'>
      <SchedulerContainer />
    </Layout>
  );
};
