import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.flex}>
      {options.map((btn) => {
        return (
          <button
            key={btn}
            className={s.button}
            type="button"
            data-feedback={btn}
            onClick={onLeaveFeedback}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
