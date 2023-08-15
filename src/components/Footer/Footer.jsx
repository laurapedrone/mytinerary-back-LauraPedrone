import './footer.css'

const Footer = () => {
    return (
        <div className="card text-footer">
            <div className="card-body d-flex justify-content-between ">
                <div className="button-social">

                </div>
            </div>
            <div class="card-footer">
                <p>
                    <span>©&nbsp;</span>
                    <span>2023</span>
                    <span>&nbsp;</span><span className='text-mytinerary'>MyTinerary</span>
                    <span>. All Rights Reserved.</span>
                    <span>&nbsp;</span>
                    <a href="privacy-policy.html">Privacy Policy</a>
                </p>
                <p className='text'>MindHub AP MERN 08 - Laura Pedrone</p>
            </div>
        </div>

    )
}

export default Footer