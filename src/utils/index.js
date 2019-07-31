import config from '../config';

export const getVersion = () => (config.TODO_VERSION);

export const getRandomHeaderMessage = () => {
  const messages = config.HEADER_MESSAGES;
  const randomIndex = Math.round((Math.random() * messages.length));
  return messages[randomIndex];
};