const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({ // 스키마 정의
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    summary: { type: String, trim: true },
    genre: { type: String, trim: true },
    release: { type: String, required: true, trim: true },
    ISBN: { type: Number, required: true, trim: true }
})

const Book = mongoose.model('Book', bookSchema) // 스키마로부터 생성된 모델 객체
module.exports = Book;

/*
{
    "title" : "달러구트 꿈 백화점",
    "author" : "이미예",
    "summary" : "달러구트 꿈 백화점은 이미예의 장편 소설이다. 이 책은 교보문고 상반기 베스트셀러 1위로 선정되었다.",
    "genre" : "판타지 소설, 모험물",  
    "release" : "2020년 4월 21일",   
    "ISBN" : 123456
}


{
    "title" : "소크라테스 익스프레스",
    "author" : "에릭와이너",
    "summary" : "《소크라테스 익스프레스》는 마르쿠스 아우렐리우스부터 몽테뉴까지 역사상 가장 위대한 철학자들을 만나러 떠나는 여행기이자, 그들의 삶과 작품 속의 지혜가 우리 인생을 개선하는 데 어떻게 도움이 되는지 답을 찾아가는 ...",
    "genre" : "기행문학",  
    "release" : "2021년 4월 28일",   
    "ISBN" : 123457
}

{
    "title" : "작별하지 않는다",
    "author" : "한강",
    "summary" : "무엇을 생각하면 견딜 수 있나.가슴에 활활 일어나는 불이 없다면.기어이 돌아가 껴안을 네가 없다면. ...",
    "genre" : "픽션",  
    "release" : "2021년 9월 9일",   
    "ISBN" : 123458
}
*/