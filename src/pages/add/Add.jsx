import React from 'react'
import "./Add.scss"


const Add = () => {
    return (
        <div className='add'>
            <div className="container">
                <h1>Add New Gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='e.g I am really good at' />
                        <label htmlFor="">Category</label>
                        <select name="cats" id="cats">
                            <option value="design">Design</option>
                            <option value="Web">Web Development</option>
                            <option value="animation">Animation</option>
                            <option value="writer">Content Writer</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="16" placeholder='share a bit about your work experience, cool projects you’ve completed, and your area of expertise.'>  
                        </textarea>
                        <button>Create</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service Title</label>
                        <input type="text" placeholder='e.g. I Build Things On Web' />
                        <label htmlFor="">Short Description</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Short description about your service'></textarea>
                        <label htmlFor="">Delivery Time(e.g. 3 Days)</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Revision Number</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder='e.g. page design' />
                        <input type="text" placeholder='e.g. file uploading' />
                        <input type="text" placeholder='e.g setting up a domain' />
                        <input type="text" placeholder=' e.g. hosting' />
                        <label htmlFor="">Price</label>
                        <input type="number" min={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add