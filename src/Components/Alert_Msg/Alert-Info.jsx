import PropTypes from 'prop-types';
import "./Alert-Info.css";
export function AlertInfo ({message}) {
  return (
    <>
          <div className="alert-msg-header">
            <p>🪧 Alert !</p>
          </div>
          <hr />
          <div className="alert-msg-body">
            <p>{message}</p>
          </div>
    </>
  )
}

AlertInfo.propTypes = {
  message: PropTypes.string.isRequired
};

