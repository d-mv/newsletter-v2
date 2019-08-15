import { emailHtml, emailText } from './';

export const makeEmail = (url: string) => {
  const content = {
    title: 'email.title',
    paragraph: 'email.paragraph',
    button: 'email.button',
    copy: 'email.copy',
    thanks: 'email.thanks'
  };
  return {
    text: emailText(content, encodeURI(url), 'ltr'),
    html: emailHtml(content, encodeURI(url), 'ltr')
  };
};
