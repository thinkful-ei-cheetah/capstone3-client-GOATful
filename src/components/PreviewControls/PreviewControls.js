import React from 'react';
import './PreviewControls.css'
import { Link } from 'react-router-dom'

const PreviewControls = ({ prevList, displayId, previewClick }) => {

    let renderPreviews = () => {

        return prevList.map(preview => {
            console.log(displayId)
            console.log(preview.id)
            if (preview.id != displayId.id) {
                return (<li>
                    <button
                        className='preview'
                        onClick={previewClick}
                    >
                        <img
                            id={preview.id}
                            src={preview.thumbnail_url}
                            alt="preview thumbnail"
                        />
                    </button>
                </li>)
            } else {
                return (
                    <li>
                        {/* {console.log('false was hit')} */}
                        <img src={preview.thumbnail_url} alt="preview thumbnail" />
                        <button>
                            set active
                        </button>
                    </li>
                )
            }
        }
        )
    }

    return (
        <div className="preview-controls">
            <ul className="preview-tiles">

                {(!displayId) ? false : renderPreviews()}

            </ul>
            <Link to='/creator'>
                add new
            </Link>
        </div>
    )
}
export default PreviewControls;