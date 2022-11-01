import * as React from 'react';
import { Layout } from 'antd';
import TitleSection from 'components/Booking/TitleSection';

const { Header, Content, Footer } = Layout;

interface HomeLayoutProps {
  title: string;
}

const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props) => {
  const { children, title } = props;

  return (
    <>
      <Header>Header</Header>
      <Content>
        <TitleSection title={title} />
        {children}
      </Content>
      <Footer>Footer</Footer>
    </>
  );
};

export default HomeLayout;
