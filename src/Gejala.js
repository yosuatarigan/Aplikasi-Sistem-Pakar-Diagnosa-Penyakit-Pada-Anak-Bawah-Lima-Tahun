import React from 'react';

class Gejala extends React.Component {

    constructor() {
        super()
        this.state = {
            g1: '',
            g2: '',
            g3: '',
            g4: '',
            g5: '',
            g6: '',
            g7: '',
            g8: '',
            g9: '',
            g10: '',
            g11: '',
            g12: '',
            g13: '',
            g14: '',
            g15: '',
            g16: '',
            g17: '',
            g18: '',
            g19: '',
            g20: '',
            g21: '',
            g22: '',
            g23: '',
            g24: '',
            g25: '',
            g26: '',
            g27: '',
            g28: '',
            g29: '',
            g30: '',
            g31: '',
            g32: '',
            g33: '',
            g34: '',
            g35: '',
            g36: '',
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: '',
            p7: '',
            p8: '',
            p9: '',
            p10: '',
            p11: '',
            p12: '',
            p13: '',
            p14: '',
            p15: '',
            p16: '',
            p17: '',
            p18: '',
            k1: '',
            k2: '',
            k3: '',
            hasildiagnosa: '-----------'
        }
    }


    render() {

        const daftargejala = [
            "Anak tidak bisa minum atau menyusu",
            "Anak memuntahkan makanan yang dimakan",
            "Anak menderita kejang",
            "Anak tampak letargis atau tidak sadar",
            "Napas Normal",
            "Napas cepat",
            "Tarikan dinding dada ke dalam",
            "Stridor",
            "Berak cair atau lembek",
            "Mata cekung",
            "Cubitan kulit perut kembali lambat",
            "Gelisah, rewel/mudah marah",
            "Haus, minum dengan lahap",
            "Cubitan kulit perut sangat lambat",
            "Anak tampak letargis atau tidak sadar",
            "Tidak bisa minum atau malas minum",
            "Diare 14 hari atau lebih",
            "Ada darah dalam tinja",
            "Suhu badan melebihi 37.5º C",
            "Kaku kuduk (anak tidak bisa menunduk hingga dagu mencapai dada)",
            "Ruam kemerahan di kulit",
            "batuk pilek atau mata merah",
            "Luka di mulut yang dalam atau luas",
            "Kekeruhan pada kornea mata",
            "Luka di mulut",
            "Mata bernanah",
            "Demam 2 - 7 hari",
            "Demam mendadak tinggi dan terus menerus",
            "Nyeri di ulu hati",
            "bintik bintik merah",
            "Muntah bercampur darah / seperti kopi",
            "Tinja berwarna hitam",
            "Perdarahan dihidung dan gusi",
            "Syok dan gelisah",
            "Infeksi",
            "Pilek"]


        const penyakit = ["Tanda Bahaya Umum",
            "Batuk",
            "Pneumonia",
            "Pneumonia Berat",
            "Diare",
            "Diare Dehidrasi  Ringan",
            "Diare Dehidrasi  Berat",
            "Diare Persisten",
            "Diare Persisten  Berat",
            "Disentri",
            "Demam",
            "Demam dengan Tanda Bahaya Umum",
            "Campak",
            "Campak dengan komplikasi berat",
            "Campak dengan komplikasi",
            "Demam Mungkin DBD",
            "DBD",
            "Demam bukan DBD"
        ]

        const keluhan = ["Batuk", "Diare", "Demam"];

        const onk = (data, t) => {
            if (t === 1) {
                this.setState({ k1: data })
            }
            else if (t === 2) {
                this.setState({ k2: data })
            }
            else if (t === 3) {
                this.setState({ k3: data })
            }
        }

        const { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31, g32, g33, g34, g35, g36, k1, k2, k3, hasildiagnosa, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16 } = this.state;

        const checkkesehatan = () => {
             if (k3 === 'Iya' && g19 === 'Iya') {
                if (g21 === 'Iya' && g22 === 'Iya' || g25 === 'Iya') {
                    if (g1 === 'Iya' || g2 === 'Iya' || g3 === 'Iya' || g4 === 'Iya') {
                        if (g23 === 'Iya' || g24 === 'iya') {
                            this.setState({ hasildiagnosa: penyakit[13] })
                        }
                    }
                    else {
                        this.setState({ hasildiagnosa: penyakit[12] })
                    }
                }

                if(g1 === 'Iya' || g2 === 'Iya' || g3 === 'Iya' || g4 === 'Iya' || g20 ==='Iya'){
                    this.setState({ hasildiagnosa: penyakit[11] })

                }
                else {
                    this.setState({ hasildiagnosa: penyakit[10] })
                }
            }


           else if (g1 === 'Iya' || g2 === 'Iya' || g3 === 'Iya' || g4 === 'Iya') {
                this.setState({ p1: 'Iya' })
                if (k1 === 'Iya' && p1 === 'Iya' || g7 === 'Iya' || g8 === 'Iya') {
                    this.setState({ hasildiagnosa: penyakit[3] })
                }
                else if (k3 === 'Iya' && g19 === 'Iya') {
                    this.setState({ hasildiagnosa: penyakit[11] })
                }
                else if (g20 === 'Iya') {
                    this.setState({ hasildiagnosa: penyakit[11] })
                }

                else {
                    this.setState({ hasildiagnosa: penyakit[0] })
                }
            }
            else if (k1 === 'Iya' && g5 === 'Iya') {
                this.setState({ hasildiagnosa: penyakit[1] })
            }
            else if (k1 === 'Iya' && g6 === 'Iya') {
                this.setState({ hasildiagnosa: penyakit[2] })
            }
           


            else if (k2 === 'Iya' && g9 === 'Iya') {


                if (g17 === 'Iya') {
                    if (g10 === 'Iya' && g11 === 'Iya' || g12 === 'Iya' || g13 === 'Iya') {

                        this.setState({ hasildiagnosa: penyakit[8] })

                    }
                    else if (g10 === 'Iya' && g14 === 'Iya' || g15 === 'Iya' || g16 === 'Iya') {

                        this.setState({ hasildiagnosa: penyakit[8] })

                    }
                    else {
                        this.setState({ hasildiagnosa: penyakit[7] })
                    }
                }

                else if (g10 === 'Iya' && g11 === 'Iya' || g12 === 'Iya' || g13 === 'Iya') {
                    this.setState({ hasildiagnosa: penyakit[5] })
                }
                else if (g10 === 'Iya' && g14 === 'Iya' || g15 === 'Iya' || g16 === 'Iya') {
                    this.setState({ hasildiagnosa: penyakit[6] })
                }
                else if (g18 === 'Iya') {
                    this.setState({ hasildiagnosa: penyakit[9] })
                }
                else {
                    this.setState({ hasildiagnosa: penyakit[4] })
                }
            }

            else {
                this.setState({ hasildiagnosa: 'Tidak ada Penyakit' })
            }
        }


        const ong = (data, t) => {
            if (t === 1) {
                this.setState({ g1: data })
            }
            else if (t === 2) {
                this.setState({ g2: data })
            }
            else if (t === 3) {
                this.setState({ g3: data })
            }
            else if (t === 4) {
                this.setState({ g4: data })
            }
            else if (t === 5) {
                this.setState({ g5: data })
            }
            else if (t === 6) {
                this.setState({ g6: data })
            }
            else if (t === 7) {
                this.setState({ g7: data })
            }
            else if (t === 8) {
                this.setState({ g8: data })
            }
            else if (t === 9) {
                this.setState({ g9: data })
            }
            else if (t === 10) {
                this.setState({ g10: data })
            }
            else if (t === 11) {
                this.setState({ g11: data })
            }
            else if (t === 12) {
                this.setState({ g12: data })
            }
            else if (t === 13) {
                this.setState({ g13: data })
            }
            else if (t === 14) {
                this.setState({ g14: data })
            }
            else if (t === 15) {
                this.setState({ g15: data })
            }
            else if (t === 16) {
                this.setState({ g16: data })
            }
            else if (t === 17) {
                this.setState({ g17: data })
            }
            else if (t === 18) {
                this.setState({ g18: data })
            }
            else if (t === 19) {
                this.setState({ g19: data })
            }
            else if (t === 20) {
                this.setState({ g20: data })
            }
            else if (t === 21) {
                this.setState({ g21: data })
            }
            else if (t === 22) {
                this.setState({ g22: data })
            }
            else if (t === 23) {
                this.setState({ g23: data })
            }
            else if (t === 24) {
                this.setState({ g24: data })
            }
            else if (t === 25) {
                this.setState({ g25: data })
            }
            else if (t === 26) {
                this.setState({ g26: data })
            }
            else if (t === 27) {
                this.setState({ g27: data })
            }
            else if (t === 28) {
                this.setState({ g28: data })
            }
            else if (t === 29) {
                this.setState({ g29: data })
            }
            else if (t === 30) {
                this.setState({ g30: data })
            }
            else if (t === 31) {
                this.setState({ g31: data })
            }
            else if (t === 32) {
                this.setState({ g32: data })
            }
            else if (t === 33) {
                this.setState({ g33: data })
            }
            else if (t === 34) {
                this.setState({ g34: data })
            }
            else if (t === 35) {
                this.setState({ g35: data })
            }
            else if (t === 36) {
                this.setState({ g36: data })
            }


        }




        return (
            <div className="pa2">
                <div className="overflow-auto">
                    <table className="f6 w-100  center" cellSpacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">No</th>
                                <th className="fw6 tl pa3 bg-white">Gejala</th>
                                <th className="fw6 tl pa3 bg-white">Check</th>
                                <th className="fw6 tl pa3 bg-white">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">


                            <tr className="stripe-dark">
                                <td className="pa3">1</td>
                                <td className="pa3">{daftargejala[0]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 1) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 1) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g1}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">2</td>
                                <td className="pa3">{daftargejala[1]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 2) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 2) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g2}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">3</td>
                                <td className="pa3">{daftargejala[2]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 3) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 3) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g3}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">4</td>
                                <td className="pa3">{daftargejala[3]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 4) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 4) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g4}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">5</td>
                                <td className="pa3">{daftargejala[4]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 5) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 5) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g5}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">6</td>
                                <td className="pa3">{daftargejala[5]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 6) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 6) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g6}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">7</td>
                                <td className="pa3">{daftargejala[6]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 7) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 7) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g7}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">8</td>
                                <td className="pa3">{daftargejala[7]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 8) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 8) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g8}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">9</td>
                                <td className="pa3">{daftargejala[8]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 9) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 9) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g9}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">10</td>
                                <td className="pa3">{daftargejala[9]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 10) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 10) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g10}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">11</td>
                                <td className="pa3">{daftargejala[10]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 11) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 11) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g11}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">12</td>
                                <td className="pa3">{daftargejala[11]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 12) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 12) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g12}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">13</td>
                                <td className="pa3">{daftargejala[12]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 13) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 13) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g13}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">14</td>
                                <td className="pa3">{daftargejala[13]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 14) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 14) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g14}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">15</td>
                                <td className="pa3">{daftargejala[14]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 15) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 15) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g15}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">16</td>
                                <td className="pa3">{daftargejala[15]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 16) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 16) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g16}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">17</td>
                                <td className="pa3">{daftargejala[16]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 17) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 17) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g17}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">18</td>
                                <td className="pa3">{daftargejala[17]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 18) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 18) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g18}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">19</td>
                                <td className="pa3">{daftargejala[18]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 19) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 19) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g19}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">20</td>
                                <td className="pa3">{daftargejala[19]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 20) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 20) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g20}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">21</td>
                                <td className="pa3">{daftargejala[20]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 21) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 21) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g21}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">22</td>
                                <td className="pa3">{daftargejala[21]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 22) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 22) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g22}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">23</td>
                                <td className="pa3">{daftargejala[22]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 23) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 23) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g23}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">24</td>
                                <td className="pa3">{daftargejala[23]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 24) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 24) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g24}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">25</td>
                                <td className="pa3">{daftargejala[24]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 25) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 25) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g25}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">26</td>
                                <td className="pa3">{daftargejala[25]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 26) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 26) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g26}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">27</td>
                                <td className="pa3">{daftargejala[26]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 27) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 27) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g27}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">28</td>
                                <td className="pa3">{daftargejala[27]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 28) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 28) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g28}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">29</td>
                                <td className="pa3">{daftargejala[28]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 29) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 29) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g29}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">30</td>
                                <td className="pa3">{daftargejala[29]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 30) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 30) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g30}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">31</td>
                                <td className="pa3">{daftargejala[30]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 31) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 31) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g31}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">32</td>
                                <td className="pa3">{daftargejala[31]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 32) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 32) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g32}</td>

                            </tr>

                            <tr className="stripe-dark">
                                <td className="pa3">33</td>
                                <td className="pa3">{daftargejala[32]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 33) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 33) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g33}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">34</td>
                                <td className="pa3">{daftargejala[33]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 34) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 34) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g34}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">35</td>
                                <td className="pa3">{daftargejala[34]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 35) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 35) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g35}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">36</td>
                                <td className="pa3">{daftargejala[35]}</td>
                                <td className="pa3"><input type="button" onClick={() => { ong('Iya', 36) }} value='Ya' /> <input type="button" onClick={() => { ong('Tidak', 36) }} value='Tidak' /></td>
                                <td className="pa3">{this.state.g36}</td>

                            </tr>






                        </tbody>
                    </table>


                    <table className="f6 w-100 mw8 center" cellSpacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">No</th>
                                <th className="fw6 tl pa3 bg-white">Keluhan</th>
                                <th className="fw6 tl pa3 bg-white">Check</th>
                                <th className="fw6 tl pa3 bg-white">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            <tr className="stripe-dark">
                                <td className="pa3">1</td>
                                <td className="pa3">{keluhan[0]}</td>
                                <td className="pa3"><input onClick={() => onk('Iya', 1)} type="button" value='Ya' /> <input onClick={() => onk('Tidak', 1)} type="button" value='Tidak' /></td>
                                <td className="pa3">{this.state.k1}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">2</td>
                                <td className="pa3">{keluhan[1]}</td>
                                <td className="pa3"><input onClick={() => onk('Iya', 2)} type="button" value='Ya' /> <input onClick={() => onk('Tidak', 2)} type="button" value='Tidak' /></td>
                                <td className="pa3">{this.state.k2}</td>

                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">3</td>
                                <td className="pa3">{keluhan[0]}</td>
                                <td className="pa3"><input onClick={() => onk('Iya', 3)} type="button" value='Ya' /> <input onClick={() => onk('Tidak', 3)} type="button" value='Tidak' /></td>
                                <td className="pa3">{this.state.k3}</td>

                            </tr>




                        </tbody>
                    </table>
                </div>
                <br></br>
                <button onClick={checkkesehatan}>CHECK KESEHATAN</button>
                <p>HASIL DIAGNOSA</p>
                <p>{this.state.hasildiagnosa}</p>


            </div>
        );


    }
}

export default Gejala;