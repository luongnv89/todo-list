import config from '../config';

export const getVersion = () => (config.TODO_VERSION);

export const getRandomHeaderMessage = () => {
  const messages = config.HEADER_MESSAGES;
  let randomIndex = Math.round((Math.random() * messages.length));
  if (randomIndex >= messages.length) {
    randomIndex = messages.length - 1;
  }
  return messages[randomIndex];
};