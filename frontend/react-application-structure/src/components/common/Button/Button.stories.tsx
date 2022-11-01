import { AppButton } from './Button';

const Template = (args) => <AppButton {...args} />;

interface ThemeButtonProps {
  [key: string]: any;
}

//👇 Each story then reuses that template
export const ThemeButton: ThemeButtonProps = Template.bind({});
ThemeButton.args = { variant: 'primary', children: 'Primary' };

export default {
  component: AppButton,
  title: 'components/Button',
  argTypes: {}
};
