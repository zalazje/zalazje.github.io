import { default as React } from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div id="content" className="site-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">

                        <main className="main-data-block">
                            <div>
                                <p>
                                    Карта окрестностей Залазья с фото и отмеками исчезнувших деревень.
                                    <br />
                                    <Link className="continue-reading check-link" to="/map">Карта &rarr;</Link>
                                </p>
                                <p>
                                    Сельхоз перепись 1925-го и 1926-го года. В списках указаны только хозяева.
                                    <br />
                                    <Link className="continue-reading check-link" to="/1925">Списки &rarr;</Link>
                                </p>
                            </div>
                        </main>

                    </div>
                </div>
            </div>

        </div>

);
};

export default Home;