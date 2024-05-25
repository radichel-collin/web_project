import React from 'react';
import './Tables.css';

function Tables() {
    return (
        <>
        <button onClick="">
            <span class="svgBackButton">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/>
                </svg>
            </span>
        </button>
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

        </>
    )
}

export default Tables;