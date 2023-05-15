import React from 'react'
import PropTypes from 'prop-types';
// import profile1 from '../../imgs/profile/profile1.jpg'

const Insight = (props) => {
  const { imageObj, styleClasses, metricsText, spanText } = props;
  return (
    <li className='bg-white rounded-3xl p-3 py-4 pr-6 flex'>
        <div className='flex gap-6 items-center'>
            <figure className='flex '>
              { imageObj.map((each, idx) => <img src={each} className={ idx > 0 ? `${styleClasses} -ml-5` : styleClasses} alt="" />) }
            </figure>
            <div className=''>
                <p className='font-bold text-sm'>{metricsText}<span className='block text-paragraphColor text-xs font-normal mt-1'>{spanText}</span></p>
            </div>
        </div>
    </li>
  )
}

export default Insight;

Insight.propTypes = {
  imageObj: PropTypes.array,
  styleClasses: PropTypes.string,
  metricsText: PropTypes.string,
  spanText: PropTypes
};

Insight.defaultProps = {
  imageObj: [],
  styleClasses: "",
  metricsText: "",
  spanText: ""
};