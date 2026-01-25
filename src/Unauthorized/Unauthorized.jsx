import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You don't have permission to view this page.</p>
      <Link to="/signin">Go back to Sign In</Link>
    </div>
  );
};

export default Unauthorized;