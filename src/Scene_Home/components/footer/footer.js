import React from 'react';
class FooterHome extends React.Component{
    render() {
        const style ={
            position: 'relative',
            left: '240px',
        }
      return (
        <div style={{background: 'black'}}>
          <footer className="text-center" >
            <div className="container" style={style}>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h2>Open Source Survey</h2>
                        <ul className="list-inline socials">
                            <li><a><i className="fa fa-facebook"></i></a></li>
                            <li><a><i className="fa fa-twitter"></i></a></li>
                            <li><a><i className="fa fa-google-plus"></i></a></li>
                            <li><a><i className="fa fa-youtube"></i></a></li>
                            <li><a><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                        <span>&copy; Copyright 2018. OSS</span>
                    </div>
                </div>
            </div>
        </footer>
        </div>
      )
    }
}

export default FooterHome;