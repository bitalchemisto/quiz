import { Link } from 'react-router-dom';
import AppButton from 'components/common/Button';
import { LINKS } from 'routes/RenderRoutes';
import { Row, Col, Typography, Space } from 'antd';

const { Title } = Typography;

interface TitleSectionProps {
  title: string;
}
export const TitleSection: React.FunctionComponent<TitleSectionProps> = (
  props
) => {
  const { title } = props;

  return (
    <Row>
      <Col>
        <Space>
          <Title level={1}>{title}</Title>
          <AppButton>
            <Link to={LINKS.SCHEDULER}>Scheduler Calendar</Link>
          </AppButton>
        </Space>
      </Col>
      <Col>
        <Space>
          <AppButton>
            <Link to={''}>Booking Policy</Link>
          </AppButton>
          <AppButton>
            <Link to={''}>Out of hours request</Link>
          </AppButton>
        </Space>
      </Col>
    </Row>
  );
};
