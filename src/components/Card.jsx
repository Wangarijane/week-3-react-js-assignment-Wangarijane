import React from "react";
import PropTypes from "prop-types";

/**
 * Card component for displaying content in a boxed layout
 */
const Card = ({ title, children, className = "", ...rest }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`}
      {...rest}
    >
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;

