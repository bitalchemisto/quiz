import { Epg, Layout as PlanbyLayout } from 'planby';

import ChannelItem from 'components/Scheduler/ChannelItem';
import Program from 'components/Scheduler/ProgramItem';
import Timeline from 'components/Scheduler/Timeline';

export const SchedulerContainer: React.FunctionComponent<{}> = (props) => {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <Epg isLoading={isLoading} {...getEpgProps()}>
        <PlanbyLayout
          {...getLayoutProps()}
          renderTimeline={(props) => <Timeline {...props} />}
          renderProgram={({ program, ...rest }) => (
            <Program key={program.data.id} program={program} {...rest} />
          )}
          renderChannel={({ channel }) => (
            <ChannelItem key={channel.uuid} channel={channel} />
          )}
        />
      </Epg>
    </div>
  );
};
