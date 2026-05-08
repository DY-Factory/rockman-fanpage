// 소속(Affiliation) 정규화 룰 데이터
// 캐릭터/보스의 자유 텍스트 affiliation을 공통 그룹으로 묶기 위한 룰셋.
// 우선순위: item.affiliation_group(명시) > 룰 매칭 > 원본 텍스트
// 위에서부터 순차 평가하므로 더 구체적인 규칙을 위에 둔다.
const affiliationRules = [
    { keywords: ['17정예부대'], group: '제17정예부대' },
    { keywords: ['0특수부대', '0부대'], group: '제0특수부대' },
    { keywords: ['7공수부대'], group: '제7공수부대' },
    { keywords: ['6함대'], group: '제6함대' },
    { keywords: ['14격투부대'], group: '제14격투부대' },
    { keywords: ['13극지부대'], group: '제13극지부대' },
    { keywords: ['8기갑부대'], group: '제8기갑부대' },
    { keywords: ['4육상부대'], group: '제4육상부대' },
    { keywords: ['9방수부대'], group: '제9방수부대' },
    { keywords: ['헌터 본부', '총사령관'], group: '이레귤러 헌터 본부' },
    { keywords: ['레드 얼럿'], group: '레드 얼럿' },
    { keywords: ['레플리포스', '레플리 에어포스'], group: '레플리포스' },
    { keywords: ['카운터 헌터'], group: '카운터 헌터' },
    { keywords: ['나이트메어'], group: '나이트메어 폴리스' }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { affiliationRules };
} else {
    window.affiliationRules = affiliationRules;
}
