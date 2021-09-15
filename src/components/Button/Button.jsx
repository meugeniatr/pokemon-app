import PropTypes from 'prop-types';
import cx from 'classnames';

export const Button = ({ variant, size, label, ...htmlButtonElementProps }) => {
  htmlButtonElementProps.className = cx(
    htmlButtonElementProps?.className,
    'py-2 px-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-white font-medium',
    variant === 'primary' ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    { 'text-sm': size === 'small' },
    { 'text-lg': size === 'large' }
  );
  return (
    <button {...htmlButtonElementProps}>
      {label}
    </button>
  );
}


Button.propTypes = {
  /**
   * The button label
   */
  label: PropTypes.string.isRequired,
  /**
   * The button variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * A button can vary in size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};
