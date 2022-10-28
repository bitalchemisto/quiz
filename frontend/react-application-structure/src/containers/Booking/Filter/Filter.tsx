import { Row, Col, Form, Select, DatePicker, TimePicker } from 'antd';

const { Option } = Select;

export const BookingFilter: React.FunctionComponent<{}> = (props) => {
  return (
    <Form
      name='form'
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      autoComplete='off'
    >
      <Row>
        <Col>
          <Form.Item label='Location' name='location'>
            <Select>
              <Option value='1'>1</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label='Date' name='date'>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label='Start' name='start'>
            <TimePicker />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label='End' name='end'>
            <TimePicker />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
