interface IMessageCounter {
  messages: number;
}

const MessageCounter = ({ messages }: IMessageCounter) => {
  return (
    <div>
      <p>
        You have gotten <span className="font-semibold">{messages}</span>{' '}
        advices!
      </p>
    </div>
  );
};

export default MessageCounter;
