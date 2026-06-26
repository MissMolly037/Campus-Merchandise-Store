import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Pagination.css';

/**
 * Usage in Products.jsx:
 *
 *   import Pagination from '../components/Pagination';
 *   const PAGE_SIZE = 12; // match your backend's page_size
 *   ...
 *   {!loading && products.length > 0 && (
 *     <Pagination
 *       currentPage={page}
 *       totalCount={totalCount}
 *       pageSize={PAGE_SIZE}
 *       onPageChange={(p) => setParam('page', p === 1 ? '' : String(p))}
 *     />
 *   )}
 */
const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  if (totalPages <= 1) return null;

  const pages = [];
  const windowSize = 1;
  for (let p = 1; p <= totalPages; p++) {
    if (
      p === 1 ||
      p === totalPages ||
      (p >= currentPage - windowSize && p <= currentPage + windowSize)
    ) {
      pages.push(p);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <FiChevronLeft size={16} />
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="pagination__dots">…</span>
        ) : (
          <button
            key={p}
            className={`pagination__btn ${p === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(p)}
            aria-current={p === currentPage ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <FiChevronRight size={16} />
      </button>
    </nav>
  );
};

export default Pagination;
