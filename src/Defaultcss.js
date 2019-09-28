export default `
.gfx-container {
    margin: auto;
    width: 1270px;
    font-family: bebas-neue, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 48px;
    color: #ffffff;
}
.gfx-header {
    -webkit-flex: 1; /* Safari 6.1+ */
    -ms-flex: 1; /* IE 10 */
    flex: 1;
    display: flex;
    font-size: 72px;
    margin-top: 54px;
    margin-bottom: 94px;
    height: 84px;
}
.gfx-subtitle {
    background-color: rgba(32, 32, 32, 0.9);
    width:390px;
    text-align: center;
}
.gfx-title {    
    background-color: rgba(0, 93, 164, 0.9);
    width:880px;
    text-align: center;
}
.gfx-listing {
    -webkit-columns: 100px 2; /* Chrome, Safari, Opera */
    -moz-columns: 100px 2; /* Firefox */
    columns: 100px 2;
}

.gfx-row > div{
    display: inline-block;
    height: 64px;
    margin: 2px;
    padding-top: 4px;
}

.gfx-position {
    width:82px;
    background-color: rgba(0, 93, 164, 0.9);
    text-align:center;
}
.gfx-name {
    width: 420px;
    padding-left: 12px;
    background-color: rgba(32, 32, 32, 0.9);
}
.gfx-score {
    width: 82px;
    text-align:center;
    background-color: rgba(240, 240, 240, 0.9);
    color:#000;
}




`