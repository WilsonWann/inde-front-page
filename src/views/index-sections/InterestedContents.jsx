import React, { useEffect, useState } from 'react'
import styles from './interestedContents.module.css';
import ContentPageConnect from './ContentPageConnect';

export default function InterestedContents({ interestedContents }) {

    const [viewInterestedContents, setViewInterestedContents] = useState(null);
  
    useEffect(() => {
      if (interestedContents && interestedContents.length > 0) {
        console.log("🚀 ~ file: ContentPage.jsx:129 ~ useEffect ~ interestedContents:", interestedContents)
        setViewInterestedContents(interestedContents.slice(0, 3))
      }
    }, [interestedContents]);
  
    function onInterestedBtnClick(e) {
      e.preventDefault()
  
      const start = interestedContents.findIndex(c => c._id == viewInterestedContents[0]._id) + parseInt(e.target.value),
        end = interestedContents.findIndex(c => c._id == viewInterestedContents[0]._id) + 3 + parseInt(e.target.value);
  
      console.log("🚀 ~ file: ContentPage.jsx:94 ~ onInterestedBtnClick ~ start:", start)
      console.log("🚀 ~ file: ContentPage.jsx:94 ~ onInterestedBtnClick ~ end:", end)
      setViewInterestedContents(interestedContents.slice(start, end))
    }
  
    return viewInterestedContents && viewInterestedContents.length > 0 && <div className={styles['connect-flex-site']}>
      <div className='title'>Interested</div>
      <div>
        <div>
          {interestedContents.findIndex(c => c._id === viewInterestedContents[0]._id) !== 0 &&
            <button value="-1" onClick={e => onInterestedBtnClick(e)}>Previous</button>
          }
        </div>
        <div className={styles['connect-flex-box-wrapper']}>
          <ContentPageConnect
            contents={viewInterestedContents} />
        </div>
  
  
        <div>
          {
            interestedContents.findIndex(c => c._id === viewInterestedContents[viewInterestedContents.length - 1]._id) !== interestedContents.length - 1 &&
            <button value="1" onClick={e => onInterestedBtnClick(e)}>Next</button>
          }
        </div>
      </div>
    </div>;
  }
