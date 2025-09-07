import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage(){
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1>
                        Solution For RealEstate's Trade , Find and Get Dream Place
                    </h1>
                    <p>lfnjiefn enfefifn dnfieffn nefiren eifnreivn fdfnvdfvreg erg trgr  ger gerg  gfer gfergf  fvgre  g  fjh tgdf rth rfb dfg rh rfef grtrfgvrhgrgr brtgrgr tg rgr grrgregreg  ggrnfn iin inin niini ytv tv yby rrgfefe</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Propert Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage