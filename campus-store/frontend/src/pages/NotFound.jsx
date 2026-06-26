import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found__content">
      <span className="not-found__code">404</span>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist or may have been moved.</p>
      <div className="not-found__actions">
        <Link to="/" className="btn btn-outline">
          <FiArrowLeft size={16} /> Back Home
        </Link>
        <Link to="/products" className="btn btn-primary">
          <FiShoppingBag size={16} /> Shop Products
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
