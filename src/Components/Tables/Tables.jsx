import React from 'react';
import './Tables.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Tables() {
    return (
        <>
        <Header />
        <div class="tableHeading">YO

            <table id="scope">
                <thead>
                    <tr>
                        <th scope="col" class="tableColumnHeader">Company</th>
                        <th scope="col" class="tableColumnHeader">Contact</th>
                        <th scope="col" class="tableColumnHeader">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Alfreds Futterkiste</th>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <th scope="row">Centro commercial Moctezuma</th>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <th scope="row">Ernst Handel</th>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <th scope="row">Island Trading </th>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <th scope="row">Laughing Bacchus Winecellars</th>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <th scope="row">Magazzini Alimentari Riuniti</th>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div> Second Table </div>
        <Footer />
        </>
    )
}

export default Tables;