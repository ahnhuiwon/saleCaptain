export class FilterClass {

    /**
     * Site filter Class
     * @param array response 데이터 타입은 array
     * @param url 사이트 분기점
     */

    constructor(array, url) {
        this.array = array;
        this.url = url.substring(url.lastIndexOf('/') + 1);
    }


    // 에펨코리아 filter
    fmkorea_filter() {
        const filter_after = this.array.map(data => (
            { 
                ...data, 
                date : data.date.replaceAll("\t", ""),
                img : data.img.replaceAll("\t", ""),
                lnk : data.lnk.replaceAll("\t", "").replace("/index","https://www.fmkorea.com/search"),
                price : data.price.replaceAll("\t", "").replace("가격:", ""),
                shop : data.shop.replaceAll("\t", ""),
                title : data.title.replaceAll("\t", "")
            }
        ))
        return filter_after;
    }


    // 뽐뿌게시판 filter
    ppomppu_filter() {
        const filter_blank = this.array.filter(data => data.date !== '' && data.title !== '');
        const filter_after = filter_blank.map( data => (
            { 
                ...data, 
                lnk : data.lnk.replace("view","https://www.ppomppu.co.kr/zboard/zboard"),
            }
        ))
        
        return filter_after;
    }


    // 사이트마다 filter 함수 실행
    branch_filter() {
        switch(this.url) {
            case 'fmkorea' :
                return this.fmkorea_filter();
            case 'ppomppu' : 
                return this.ppomppu_filter();
            case 'food' : 
                return this.ppomppu_filter();
        }
    }
}