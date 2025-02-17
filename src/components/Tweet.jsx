import ProfileImage from './ProfileImage'
import Actions from './Actions'
import User from './User'
import Message from './Message'
import Timestamp from './Timestamp'

function Tweet(props) {
  console.log(props)
  return (
    <div className='tweet'>
      <ProfileImage image={props.tweet.user.image} />

      <div className='body'>
        <div className='top'>
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
