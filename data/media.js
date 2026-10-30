// 인물별 대표 이미지와 작품별 갤러리. 등장 기록과 이미지 확보 여부를 구분합니다.
const mediaData = {
    "assets": {
        "classic": {
            "src": "assets/images/classic.jpg",
            "width": 985,
            "height": 400,
            "alt": "록맨 11 · 클래식 시리즈 대표 이미지",
            "caption": "록맨 11 · 클래식 시리즈 대표 이미지",
            "source": "https://megaman.capcom.com/",
            "original": "https://megaman.capcom.com/img/MM11_heroimage1.jpg",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25"
        },
        "x-banner": {
            "src": "assets/images/x-banner.jpg",
            "width": 985,
            "height": 400,
            "alt": "록맨 X 애니버서리 컬렉션 1·2 · 홍보 이미지",
            "caption": "록맨 X 애니버서리 컬렉션 1·2 · 홍보 이미지",
            "source": "https://megaman.capcom.com/",
            "original": "https://megaman.capcom.com/img/MMXLC_heroimage.jpg",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25"
        },
        "zero-zx": {
            "src": "assets/images/zero-zx.jpg",
            "width": 1067,
            "height": 600,
            "alt": "록맨 제로 & 젝스 더블 히어로 컬렉션 · 합본 홍보 이미지",
            "caption": "록맨 제로 & 젝스 더블 히어로 컬렉션 · 합본 홍보 이미지",
            "source": "https://megaman.capcom.com/",
            "original": "https://megaman.capcom.com/img/MM0ZX_1067x600.jpg",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25"
        },
        "person-x": {
            "src": "assets/images/characters/x.png",
            "width": 571,
            "height": 664,
            "alt": "엑스 · 록맨 X 삽화",
            "caption": "엑스 · 록맨 X 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/d/da/MMX_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-zero": {
            "src": "assets/images/characters/zero.png",
            "width": 502,
            "height": 659,
            "alt": "제로 · 록맨 X 삽화",
            "caption": "제로 · 록맨 X 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/9/91/MMX_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-axl": {
            "src": "assets/images/characters/axl.png",
            "width": 574,
            "height": 772,
            "alt": "엑셀 · 록맨 X7 삽화",
            "caption": "엑셀 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/Axl",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/d/d7/MMX7_-_Axl_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-signas": {
            "src": "assets/images/characters/signas.png",
            "width": 445,
            "height": 694,
            "alt": "시그너스 · 록맨 X5 삽화",
            "caption": "시그너스 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Signas",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/d/d2/MMX5_-_Signas_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-alia": {
            "src": "assets/images/characters/alia.jpg",
            "width": 1100,
            "height": 1600,
            "alt": "에이리아 · 록맨 X8 삽화",
            "caption": "에이리아 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Alia",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/68/MMX8_-_Alia_Art.jpg",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-douglas": {
            "src": "assets/images/characters/douglas.png",
            "width": 345,
            "height": 702,
            "alt": "더글라스 · 록맨 X5 삽화",
            "caption": "더글라스 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Douglas",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/f/f4/MMX5_-_Douglas_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-layer": {
            "src": "assets/images/characters/layer.jpg",
            "width": 1600,
            "height": 1700,
            "alt": "레이야 · 록맨 X8 삽화",
            "caption": "레이야 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Layer",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/5/5a/MMX8_-_Layer_Art.jpg",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-palette": {
            "src": "assets/images/characters/palette.jpg",
            "width": 1200,
            "height": 1500,
            "alt": "팔렛트 · 록맨 X8 삽화",
            "caption": "팔렛트 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Pallette",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/f/fa/MMX8_-_Pallette_Art.jpg",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-vava": {
            "src": "assets/images/characters/vava.png",
            "width": 512,
            "height": 652,
            "alt": "바바 · 록맨 X 삽화",
            "caption": "바바 · 록맨 X 삽화",
            "source": "https://megamanwiki.com/wiki/Vile",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/9/92/MMX_-_Vile_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-sigma": {
            "src": "assets/images/characters/sigma.png",
            "width": 585,
            "height": 800,
            "alt": "시그마 · 록맨 X 삽화",
            "caption": "시그마 · 록맨 X 삽화",
            "source": "https://megamanwiki.com/wiki/Sigma",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/c/c6/MMX_-_Sigma_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-sagesse": {
            "src": "assets/images/characters/sagesse.png",
            "width": 823,
            "height": 793,
            "alt": "사게스 · 록맨 X2 삽화",
            "caption": "사게스 · 록맨 X2 삽화",
            "source": "https://megamanwiki.com/wiki/Serges",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/f/f5/MMX2_-_Serges_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-violen": {
            "src": "assets/images/characters/violen.png",
            "width": 610,
            "height": 821,
            "alt": "바이올렌 · 록맨 X2 삽화",
            "caption": "바이올렌 · 록맨 X2 삽화",
            "source": "https://megamanwiki.com/wiki/Violen",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/e/ed/MMX2_-_Violen_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-agile": {
            "src": "assets/images/characters/agile.png",
            "width": 365,
            "height": 696,
            "alt": "아질 · 록맨 X2 삽화",
            "caption": "아질 · 록맨 X2 삽화",
            "source": "https://megamanwiki.com/wiki/Agile",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/8/88/MMX2_-_Agile_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-doppler": {
            "src": "assets/images/characters/doppler.png",
            "width": 520,
            "height": 800,
            "alt": "Dr. 도플러 · 록맨 X3 삽화",
            "caption": "Dr. 도플러 · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/Dr._Doppler",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/f/f7/MMX3_-_Dr._Doppler_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-bit": {
            "src": "assets/images/characters/bit.png",
            "width": 560,
            "height": 810,
            "alt": "바이트 · 록맨 X3 삽화",
            "caption": "바이트 · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/Bit",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/b/b4/MMX3_-_Bit_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-byte": {
            "src": "assets/images/characters/byte.png",
            "width": 670,
            "height": 820,
            "alt": "만다레라 BB · 록맨 X3 삽화",
            "caption": "만다레라 BB · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/Byte",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/08/MMX3_-_Byte_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-iris": {
            "src": "assets/images/characters/iris.png",
            "width": 726,
            "height": 817,
            "alt": "아이리스 · 록맨 X4 삽화",
            "caption": "아이리스 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/Iris",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/e/ef/MMX4_-_Iris_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-general": {
            "src": "assets/images/characters/general.png",
            "width": 625,
            "height": 832,
            "alt": "제너럴 · 록맨 X4 삽화",
            "caption": "제너럴 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/General",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/6f/MMX4_-_General_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-colonel": {
            "src": "assets/images/characters/colonel.png",
            "width": 686,
            "height": 827,
            "alt": "커넬 · 록맨 X4 삽화",
            "caption": "커넬 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/Colonel",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/4/4b/MMX4_-_Colonel_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-double": {
            "src": "assets/images/characters/double.png",
            "width": 622,
            "height": 701,
            "alt": "더블 · 록맨 X4 삽화",
            "caption": "더블 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/Double",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/1/18/MMX4_-_Double_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-dynamo": {
            "src": "assets/images/characters/dynamo.png",
            "width": 640,
            "height": 1305,
            "alt": "다이나모 · 록맨 X5 삽화",
            "caption": "다이나모 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Dynamo",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/05/MMX5_-_Dynamo_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-gate": {
            "src": "assets/images/characters/gate.png",
            "width": 532,
            "height": 824,
            "alt": "게이트 · 록맨 X6 삽화",
            "caption": "게이트 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Gate",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/1/17/MMX6_-_Gate_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-isoc": {
            "src": "assets/images/characters/isoc.png",
            "width": 393,
            "height": 815,
            "alt": "아이조크 · 록맨 X6 삽화",
            "caption": "아이조크 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Isoc",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/9/9f/MMX6_-_Isoc_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-highmax": {
            "src": "assets/images/characters/highmax.png",
            "width": 539,
            "height": 783,
            "alt": "하이맥스 · 록맨 X6 삽화",
            "caption": "하이맥스 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/High_Max",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/2/2b/MMX6_-_High_Max_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-red": {
            "src": "assets/images/characters/red.png",
            "width": 2200,
            "height": 1900,
            "alt": "레드 · 록맨 X7 삽화",
            "caption": "레드 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/Red",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/8/8c/MMX7_-_Red_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-lumine": {
            "src": "assets/images/characters/lumine.png",
            "width": 600,
            "height": 750,
            "alt": "루미네 · 록맨 X8 삽화",
            "caption": "루미네 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Lumine",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/7/77/MMX8_-_Lumine_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-light": {
            "src": "assets/images/characters/light.png",
            "width": 1906,
            "height": 3738,
            "alt": "라이트 박사 · 록맨 11 삽화",
            "caption": "라이트 박사 · 록맨 11 삽화",
            "source": "https://megamanwiki.com/wiki/Dr._Light",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/68/MM11_-_Dr._Light_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다. 클래식 시리즈 록맨 11의 외형 참고용 삽화이며, X 시리즈 등장 장면을 뜻하지 않습니다.",
            "workId": "MM11"
        },
        "person-cain": {
            "src": "assets/images/characters/cain.png",
            "width": 455,
            "height": 822,
            "alt": "케인 박사 · 록맨 X2 삽화",
            "caption": "케인 박사 · 록맨 X2 삽화",
            "source": "https://megamanwiki.com/wiki/Dr._Cain",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/e/ed/MMX2_-_Dr._Cain_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-wily": {
            "src": "assets/images/characters/wily.png",
            "width": 474,
            "height": 908,
            "alt": "와일리 박사 · 록맨 11 삽화",
            "caption": "와일리 박사 · 록맨 11 삽화",
            "source": "https://megamanwiki.com/wiki/Dr._Wily",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/e/ee/MM11_-_Dr._Wily_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다. 클래식 시리즈 록맨 11의 외형 참고용 삽화이며, X 시리즈 등장 장면을 뜻하지 않습니다.",
            "workId": "MM11"
        },
        "person-chill_penguin": {
            "src": "assets/images/characters/chill_penguin.png",
            "width": 534,
            "height": 682,
            "alt": "아이시 펭기고 · 록맨 X1 삽화",
            "caption": "아이시 펭기고 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-chillpenguin.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-spark_mandrill": {
            "src": "assets/images/characters/spark_mandrill.png",
            "width": 624,
            "height": 700,
            "alt": "스파크 맨드릴러 · 록맨 X1 삽화",
            "caption": "스파크 맨드릴러 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-sparkmandrill.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-armored_armadillo": {
            "src": "assets/images/characters/armored_armadillo.png",
            "width": 721,
            "height": 643,
            "alt": "아머 알마지 · 록맨 X1 삽화",
            "caption": "아머 알마지 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-armoredarmadillo.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-launch_octopus": {
            "src": "assets/images/characters/launch_octopus.png",
            "width": 540,
            "height": 700,
            "alt": "런처 오크토펄드 · 록맨 X1 삽화",
            "caption": "런처 오크토펄드 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-launchoctopus.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-boomer_kuwanger": {
            "src": "assets/images/characters/boomer_kuwanger.png",
            "width": 584,
            "height": 787,
            "alt": "부메랑 쿠왕거 · 록맨 X1 삽화",
            "caption": "부메랑 쿠왕거 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-boomerkuwanger.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-sting_chameleon": {
            "src": "assets/images/characters/sting_chameleon.png",
            "width": 731,
            "height": 694,
            "alt": "스팅 카멜레오 · 록맨 X1 삽화",
            "caption": "스팅 카멜레오 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-stingchameleon.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-storm_eagle": {
            "src": "assets/images/characters/storm_eagle.png",
            "width": 561,
            "height": 777,
            "alt": "스톰 이글리드 · 록맨 X1 삽화",
            "caption": "스톰 이글리드 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-stormeagle.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-flame_mammoth": {
            "src": "assets/images/characters/flame_mammoth.png",
            "width": 613,
            "height": 800,
            "alt": "버닝 나우만더 · 록맨 X1 삽화",
            "caption": "버닝 나우만더 · 록맨 X1 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx1-flamemammoth.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X1"
        },
        "person-wire_sponge": {
            "src": "assets/images/characters/wire_sponge.png",
            "width": 620,
            "height": 788,
            "alt": "와이어 헤치말 · 록맨 X2 삽화",
            "caption": "와이어 헤치말 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-wiresponge.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-wheel_gator": {
            "src": "assets/images/characters/wheel_gator.png",
            "width": 900,
            "height": 549,
            "alt": "휠 엘리게이츠 · 록맨 X2 삽화",
            "caption": "휠 엘리게이츠 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-wheelgator.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-bubble_crab": {
            "src": "assets/images/characters/bubble_crab.png",
            "width": 653,
            "height": 686,
            "alt": "버블 크랩로스 · 록맨 X2 삽화",
            "caption": "버블 크랩로스 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-bubblecrab.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-flame_stag": {
            "src": "assets/images/characters/flame_stag.png",
            "width": 510,
            "height": 800,
            "alt": "플레임 스태거 · 록맨 X2 삽화",
            "caption": "플레임 스태거 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-flamestag.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-morph_moth": {
            "src": "assets/images/characters/morph_moth.png",
            "width": 666,
            "height": 777,
            "alt": "메타모르 모스미노스 · 록맨 X2 삽화",
            "caption": "메타모르 모스미노스 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-morphmoth.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-magna_centipede": {
            "src": "assets/images/characters/magna_centipede.png",
            "width": 669,
            "height": 800,
            "alt": "마그네 햐쿠레거 · 록맨 X2 삽화",
            "caption": "마그네 햐쿠레거 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-magnacentipede.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-crystal_snail": {
            "src": "assets/images/characters/crystal_snail.png",
            "width": 641,
            "height": 700,
            "alt": "크리스탈 마이마인 · 록맨 X2 삽화",
            "caption": "크리스탈 마이마인 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-crystalsnail.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-overdrive_ostrich": {
            "src": "assets/images/characters/overdrive_ostrich.png",
            "width": 519,
            "height": 800,
            "alt": "소닉 오스트리그 · 록맨 X2 삽화",
            "caption": "소닉 오스트리그 · 록맨 X2 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx2-overdriveostrich.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X2"
        },
        "person-blizzard_buffalo": {
            "src": "assets/images/characters/blizzard_buffalo.png",
            "width": 581,
            "height": 777,
            "alt": "프로즌 버팔리오 · 록맨 X3 삽화",
            "caption": "프로즌 버팔리오 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-blizzardbuffalo.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-toxic_seahorse": {
            "src": "assets/images/characters/toxic_seahorse.png",
            "width": 774,
            "height": 777,
            "alt": "애시드 시포스 · 록맨 X3 삽화",
            "caption": "애시드 시포스 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-toxicseahorse.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-tunnel_rhino": {
            "src": "assets/images/characters/tunnel_rhino.png",
            "width": 843,
            "height": 777,
            "alt": "스크류 마사이더 · 록맨 X3 삽화",
            "caption": "스크류 마사이더 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-tunnelrhino.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-volt_catfish": {
            "src": "assets/images/characters/volt_catfish.png",
            "width": 700,
            "height": 684,
            "alt": "일렉트로 나마즈로스 · 록맨 X3 삽화",
            "caption": "일렉트로 나마즈로스 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-voltcatfish.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-crush_crawfish": {
            "src": "assets/images/characters/crush_crawfish.png",
            "width": 800,
            "height": 581,
            "alt": "시저스 쉬림퍼 · 록맨 X3 삽화",
            "caption": "시저스 쉬림퍼 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-crushcrawfish.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-neon_tiger": {
            "src": "assets/images/characters/neon_tiger.png",
            "width": 700,
            "height": 652,
            "alt": "네온 타이거 · 록맨 X3 삽화",
            "caption": "네온 타이거 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-neontiger.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-gravity_beetle": {
            "src": "assets/images/characters/gravity_beetle.png",
            "width": 800,
            "height": 665,
            "alt": "그래비티 비트부드 · 록맨 X3 삽화",
            "caption": "그래비티 비트부드 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-gravitybeetle.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-blast_hornet": {
            "src": "assets/images/characters/blast_hornet.png",
            "width": 640,
            "height": 777,
            "alt": "익스플로즈 호넥 · 록맨 X3 삽화",
            "caption": "익스플로즈 호넥 · 록맨 X3 삽화",
            "source": "https://bogleech.com/mmx",
            "original": "https://bogleech.com/vgmonsters/mmx3-blasthornet.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X3"
        },
        "person-web_spider": {
            "src": "assets/images/characters/web_spider.png",
            "width": 800,
            "height": 588,
            "alt": "웹 스파이더스 · 록맨 X4 삽화",
            "caption": "웹 스파이더스 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-webspider.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-split_mushroom": {
            "src": "assets/images/characters/split_mushroom.png",
            "width": 634,
            "height": 800,
            "alt": "스플릿 머쉬룸 · 록맨 X4 삽화",
            "caption": "스플릿 머쉬룸 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-splitmushroom.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-cyber_peacock": {
            "src": "assets/images/characters/cyber_peacock.png",
            "width": 585,
            "height": 800,
            "alt": "사이버 쿠자커 · 록맨 X4 삽화",
            "caption": "사이버 쿠자커 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-cyberpeacock.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-storm_owl": {
            "src": "assets/images/characters/storm_owl.png",
            "width": 777,
            "height": 673,
            "alt": "스톰 푸쿠로울 · 록맨 X4 삽화",
            "caption": "스톰 푸쿠로울 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-stormowl.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-magma_dragoon": {
            "src": "assets/images/characters/magma_dragoon.png",
            "width": 513,
            "height": 800,
            "alt": "마그마드 드라군 · 록맨 X4 삽화",
            "caption": "마그마드 드라군 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-magmadragoon.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-frost_walrus": {
            "src": "assets/images/characters/frost_walrus.png",
            "width": 777,
            "height": 662,
            "alt": "프로스트 키바토도스 · 록맨 X4 삽화",
            "caption": "프로스트 키바토도스 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-frostwalrus.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-jet_stingray": {
            "src": "assets/images/characters/jet_stingray.png",
            "width": 700,
            "height": 578,
            "alt": "제트 스팅렌 · 록맨 X4 삽화",
            "caption": "제트 스팅렌 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-jetstingray.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-slash_beast": {
            "src": "assets/images/characters/slash_beast.png",
            "width": 640,
            "height": 800,
            "alt": "슬래쉬 비스트레오 · 록맨 X4 삽화",
            "caption": "슬래쉬 비스트레오 · 록맨 X4 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx4-slashbeast.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X4"
        },
        "person-crescent_grizzly": {
            "src": "assets/images/characters/crescent_grizzly.png",
            "width": 869,
            "height": 836,
            "alt": "크레센트 그리즐리 · 록맨 X5 삽화",
            "caption": "크레센트 그리즐리 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-crescentgrizzly.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-volt_kraken": {
            "src": "assets/images/characters/volt_kraken.png",
            "width": 777,
            "height": 787,
            "alt": "볼트 크라켄 · 록맨 X5 삽화",
            "caption": "볼트 크라켄 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-voltkraken.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-shining_firefly": {
            "src": "assets/images/characters/shining_firefly.png",
            "width": 799,
            "height": 831,
            "alt": "샤이닝 호타루니쿠스 · 록맨 X5 삽화",
            "caption": "샤이닝 호타루니쿠스 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-shiningfirefly.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-tidal_whale": {
            "src": "assets/images/characters/tidal_whale.png",
            "width": 800,
            "height": 675,
            "alt": "타이달 맥코엔 · 록맨 X5 삽화",
            "caption": "타이달 맥코엔 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-tidalwhale.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-spiral_pegasus": {
            "src": "assets/images/characters/spiral_pegasus.png",
            "width": 659,
            "height": 839,
            "alt": "스파이럴 페가시온 · 록맨 X5 삽화",
            "caption": "스파이럴 페가시온 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-spiralpegasus.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-spike_rosered": {
            "src": "assets/images/characters/spike_rosered.png",
            "width": 575,
            "height": 836,
            "alt": "스파이크 로즈레드 · 록맨 X5 삽화",
            "caption": "스파이크 로즈레드 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-spikerosered.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-dark_necrobat": {
            "src": "assets/images/characters/dark_necrobat.png",
            "width": 588,
            "height": 831,
            "alt": "다크 네크로뱃 · 록맨 X5 삽화",
            "caption": "다크 네크로뱃 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-darknecrobat.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-burn_dinorex": {
            "src": "assets/images/characters/burn_dinorex.png",
            "width": 732,
            "height": 831,
            "alt": "번 디노렉스 · 록맨 X5 삽화",
            "caption": "번 디노렉스 · 록맨 X5 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx5-burndinorex.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X5"
        },
        "person-commander_yammark": {
            "src": "assets/images/characters/commander_yammark.png",
            "width": 800,
            "height": 528,
            "alt": "커맨더 얀마크 · 록맨 X6 삽화",
            "caption": "커맨더 얀마크 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-commanderyammark.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-ground_scaravich": {
            "src": "assets/images/characters/ground_scaravich.png",
            "width": 643,
            "height": 773,
            "alt": "그라운드 스카라비치 · 록맨 X6 삽화",
            "caption": "그라운드 스카라비치 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-groundscaravich.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-blaze_heatnix": {
            "src": "assets/images/characters/blaze_heatnix.png",
            "width": 749,
            "height": 840,
            "alt": "블레이즈 히트닉스 · 록맨 X6 삽화",
            "caption": "블레이즈 히트닉스 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-blazeheatnix.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-blizzard_wolfang": {
            "src": "assets/images/characters/blizzard_wolfang.png",
            "width": 800,
            "height": 590,
            "alt": "블리자드 볼팡 · 록맨 X6 삽화",
            "caption": "블리자드 볼팡 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-blizzardwolfang.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-rainy_turtloid": {
            "src": "assets/images/characters/rainy_turtloid.png",
            "width": 800,
            "height": 735,
            "alt": "레이니 터틀로이드 · 록맨 X6 삽화",
            "caption": "레이니 터틀로이드 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-rainyturtloid.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-metal_shark_player": {
            "src": "assets/images/characters/metal_shark_player.png",
            "width": 587,
            "height": 750,
            "alt": "메탈샤크 플레이어 · 록맨 X6 삽화",
            "caption": "메탈샤크 플레이어 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-metalsharkplayer.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-shield_sheldon": {
            "src": "assets/images/characters/shield_sheldon.png",
            "width": 800,
            "height": 614,
            "alt": "실드 셀던 · 록맨 X6 삽화",
            "caption": "실드 셀던 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-shieldsheldon.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-infinity_mijinion": {
            "src": "assets/images/characters/infinity_mijinion.png",
            "width": 800,
            "height": 770,
            "alt": "인피니티 미지니온 · 록맨 X6 삽화",
            "caption": "인피니티 미지니온 · 록맨 X6 삽화",
            "source": "https://bogleech.com/mmxb",
            "original": "https://bogleech.com/vgmonsters/mmx6-infinitymijinion.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X6"
        },
        "person-soldier_stonekong": {
            "src": "assets/images/characters/soldier_stonekong.png",
            "width": 777,
            "height": 593,
            "alt": "솔저 스톤콩 · 록맨 X7 삽화",
            "caption": "솔저 스톤콩 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-soldierstonekong.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-tornado_tonion": {
            "src": "assets/images/characters/tornado_tonion.png",
            "width": 700,
            "height": 457,
            "alt": "토네이도 데보니온 · 록맨 X7 삽화",
            "caption": "토네이도 데보니온 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-tornadotonion.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-splash_warfly": {
            "src": "assets/images/characters/splash_warfly.png",
            "width": 519,
            "height": 700,
            "alt": "스플래시 워플라이 · 록맨 X7 삽화",
            "caption": "스플래시 워플라이 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-splashwarfly.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-flame_hyenard": {
            "src": "assets/images/characters/flame_hyenard.png",
            "width": 700,
            "height": 429,
            "alt": "플레임 하이에나드 · 록맨 X7 삽화",
            "caption": "플레임 하이에나드 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-flamehyenard.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-ride_boarski": {
            "src": "assets/images/characters/ride_boarski.png",
            "width": 700,
            "height": 519,
            "alt": "헬라이드 이노부스키 · 록맨 X7 삽화",
            "caption": "헬라이드 이노부스키 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-rideboarski.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-snipe_anteator": {
            "src": "assets/images/characters/snipe_anteator.png",
            "width": 800,
            "height": 780,
            "alt": "스나이프 아리퀵 · 록맨 X7 삽화",
            "caption": "스나이프 아리퀵 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-snipeanteator.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-wind_crowrang": {
            "src": "assets/images/characters/wind_crowrang.png",
            "width": 700,
            "height": 456,
            "alt": "윈드 카라스팅 · 록맨 X7 삽화",
            "caption": "윈드 카라스팅 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-windcrowrang.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-vanishing_gungaroo": {
            "src": "assets/images/characters/vanishing_gungaroo.png",
            "width": 550,
            "height": 700,
            "alt": "배니싱 간가룬 · 록맨 X7 삽화",
            "caption": "배니싱 간가룬 · 록맨 X7 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx7-vanishinggungaroo.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X7"
        },
        "person-optic_sunflower": {
            "src": "assets/images/characters/optic_sunflower.png",
            "width": 633,
            "height": 800,
            "alt": "옵틱 선플라워드 · 록맨 X8 삽화",
            "caption": "옵틱 선플라워드 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-opticsunflower.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-gravity_antonion": {
            "src": "assets/images/characters/gravity_antonion.png",
            "width": 798,
            "height": 606,
            "alt": "그래비티 안토니온 · 록맨 X8 삽화",
            "caption": "그래비티 안토니온 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-gravityantonion.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-earthrock_trilobyte": {
            "src": "assets/images/characters/earthrock_trilobyte.png",
            "width": 730,
            "height": 770,
            "alt": "어스로크 트리로비치 · 록맨 X8 삽화",
            "caption": "어스로크 트리로비치 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-earthrocktrilobite.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-gigabolt_manowar": {
            "src": "assets/images/characters/gigabolt_manowar.png",
            "width": 800,
            "height": 639,
            "alt": "기가볼트 도쿠라겐 · 록맨 X8 삽화",
            "caption": "기가볼트 도쿠라겐 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-gigaboltmanowar.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-avalanche_yeti": {
            "src": "assets/images/characters/avalanche_yeti.png",
            "width": 800,
            "height": 687,
            "alt": "아발란체 예티 · 록맨 X8 삽화",
            "caption": "아발란체 예티 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-avalancheyeti.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-burn_rooster": {
            "src": "assets/images/characters/burn_rooster.png",
            "width": 700,
            "height": 658,
            "alt": "번 코케코커 · 록맨 X8 삽화",
            "caption": "번 코케코커 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-burnrooster.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-bamboo_pandamonium": {
            "src": "assets/images/characters/bamboo_pandamonium.png",
            "width": 800,
            "height": 520,
            "alt": "뱀부 판데모니움 · 록맨 X8 삽화",
            "caption": "뱀부 판데모니움 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-bamboopandamonium.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "person-dark_mantis": {
            "src": "assets/images/characters/dark_mantis.png",
            "width": 800,
            "height": 506,
            "alt": "다크 네이드 · 록맨 X8 삽화",
            "caption": "다크 네이드 · 록맨 X8 삽화",
            "source": "https://bogleech.com/mmxc",
            "original": "https://bogleech.com/vgmonsters/mmx8-darkmantis.png",
            "sourceLabel": "Bogleech (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "note": "원본 이미지 전체를 비율 그대로 표시합니다. 원본 자체가 상반신만 담은 경우에는 해당 구도를 유지합니다.",
            "workId": "X8"
        },
        "x-x2-1": {
            "src": "assets/images/characters/x_x2_1.png",
            "width": 751,
            "height": 800,
            "alt": "엑스 · 록맨 X2 삽화",
            "caption": "엑스 · 록맨 X2 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/c/c6/MMX2_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X2",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-x3-1": {
            "src": "assets/images/characters/x_x3_1.png",
            "width": 677,
            "height": 835,
            "alt": "엑스 · 록맨 X3 삽화",
            "caption": "엑스 · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/9/95/MMX3_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X3",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-x4-1": {
            "src": "assets/images/characters/x_x4_1.png",
            "width": 773,
            "height": 824,
            "alt": "엑스 · 록맨 X4 삽화",
            "caption": "엑스 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/a/ae/MMX4_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X4",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-x5-1": {
            "src": "assets/images/characters/x_x5_1.png",
            "width": 454,
            "height": 807,
            "alt": "엑스 · 록맨 X5 삽화",
            "caption": "엑스 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/5/57/MMX5_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X5",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-x6-1": {
            "src": "assets/images/characters/x_x6_1.png",
            "width": 722,
            "height": 814,
            "alt": "엑스 · 록맨 X6 삽화",
            "caption": "엑스 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/3/3e/MMX6_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-x7-1": {
            "src": "assets/images/characters/x_x7_1.png",
            "width": 506,
            "height": 800,
            "alt": "엑스 · 록맨 X7 삽화",
            "caption": "엑스 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/a/ad/MMX7_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X7",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-x8-1": {
            "src": "assets/images/characters/x_x8_1.png",
            "width": 594,
            "height": 840,
            "alt": "엑스 · 록맨 X8 삽화",
            "caption": "엑스 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/X",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/9/9b/MMX8_-_X_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x2-1": {
            "src": "assets/images/characters/zero_x2_1.png",
            "width": 536,
            "height": 818,
            "alt": "제로 · 록맨 X2 삽화",
            "caption": "제로 · 록맨 X2 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/67/MMX2_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X2",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x3-1": {
            "src": "assets/images/characters/zero_x3_1.png",
            "width": 500,
            "height": 725,
            "alt": "제로 · 록맨 X3 삽화",
            "caption": "제로 · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/0d/MMX3_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X3",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x4-1": {
            "src": "assets/images/characters/zero_x4_1.png",
            "width": 965,
            "height": 794,
            "alt": "제로 · 록맨 X4 삽화",
            "caption": "제로 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/00/MMX4_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X4",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x5-1": {
            "src": "assets/images/characters/zero_x5_1.png",
            "width": 2545,
            "height": 3866,
            "alt": "제로 · 록맨 X5 삽화",
            "caption": "제로 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/0c/MMX5_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X5",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x6-1": {
            "src": "assets/images/characters/zero_x6_1.png",
            "width": 1007,
            "height": 773,
            "alt": "제로 · 록맨 X6 삽화",
            "caption": "제로 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/66/MMX6_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x7-1": {
            "src": "assets/images/characters/zero_x7_1.png",
            "width": 426,
            "height": 786,
            "alt": "제로 · 록맨 X7 삽화",
            "caption": "제로 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/c/c1/MMX7_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X7",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-x8-1": {
            "src": "assets/images/characters/zero_x8_1.png",
            "width": 520,
            "height": 600,
            "alt": "제로 · 록맨 X8 삽화",
            "caption": "제로 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Zero",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/7/75/MMX8_-_Zero_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "axl-x8-1": {
            "src": "assets/images/characters/axl_x8_1.png",
            "width": 505,
            "height": 675,
            "alt": "엑셀 · 록맨 X8 삽화",
            "caption": "엑셀 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Axl",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/0f/MMX8_-_Axl_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "signas-x6-1": {
            "src": "assets/images/characters/signas_x6_1.png",
            "width": 978,
            "height": 816,
            "alt": "시그너스 · 록맨 X6 삽화",
            "caption": "시그너스 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Signas",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/8/85/MMX6_-_Signas_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "signas-x7-1": {
            "src": "assets/images/characters/signas_x7_1.png",
            "width": 810,
            "height": 828,
            "alt": "시그너스 · 록맨 X7 삽화",
            "caption": "시그너스 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/Signas",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/4/43/MMX7_-_Signas_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X7",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "signas-x8-1": {
            "src": "assets/images/characters/signas_x8_1.jpg",
            "width": 1400,
            "height": 1800,
            "alt": "시그너스 · 록맨 X8 삽화",
            "caption": "시그너스 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Signas",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/7/7f/MMX8_-_Signas_Art.jpg",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "alia-x5-1": {
            "src": "assets/images/characters/alia_x5_1.png",
            "width": 275,
            "height": 693,
            "alt": "에이리아 · 록맨 X5 삽화",
            "caption": "에이리아 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Alia",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/1/15/MMX5_-_Alia_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X5",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "alia-x6-1": {
            "src": "assets/images/characters/alia_x6_1.png",
            "width": 868,
            "height": 840,
            "alt": "에이리아 · 록맨 X6 삽화",
            "caption": "에이리아 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Alia",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/a/a9/MMX6_-_Alia_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "alia-x7-1": {
            "src": "assets/images/characters/alia_x7_1.png",
            "width": 480,
            "height": 680,
            "alt": "에이리아 · 록맨 X7 삽화",
            "caption": "에이리아 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/Alia",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/8/8e/MMX7_-_Alia_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X7",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "douglas-x6-1": {
            "src": "assets/images/characters/douglas_x6_1.png",
            "width": 760,
            "height": 824,
            "alt": "더글라스 · 록맨 X6 삽화",
            "caption": "더글라스 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Douglas",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/5/57/MMX6_-_Douglas_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x3-1": {
            "src": "assets/images/characters/sigma_x3_1.png",
            "width": 780,
            "height": 820,
            "alt": "시그마 · 록맨 X3 삽화",
            "caption": "시그마 · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/Sigma",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/5/5a/MMX3_-_Sigma_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X3",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x4-1": {
            "src": "assets/images/characters/sigma_x4_1.png",
            "width": 953,
            "height": 840,
            "alt": "시그마 · 록맨 X4 삽화",
            "caption": "시그마 · 록맨 X4 삽화",
            "source": "https://megamanwiki.com/wiki/Sigma",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/3/3e/MMX4_-_Sigma_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X4",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x5-1": {
            "src": "assets/images/characters/sigma_x5_1.png",
            "width": 619,
            "height": 840,
            "alt": "시그마 · 록맨 X5 삽화",
            "caption": "시그마 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Sigma",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/d/df/MMX5_-_Sigma_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X5",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x7-1": {
            "src": "assets/images/characters/sigma_x7_1.png",
            "width": 934,
            "height": 769,
            "alt": "시그마 · 록맨 X7 삽화",
            "caption": "시그마 · 록맨 X7 삽화",
            "source": "https://megamanwiki.com/wiki/Sigma",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/68/MMX7_-_Sigma_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X7",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x8-1": {
            "src": "assets/images/characters/sigma_x8_1.png",
            "width": 700,
            "height": 800,
            "alt": "시그마 · 록맨 X8 삽화",
            "caption": "시그마 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Sigma",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/0/07/MMX8_-_Sigma_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "iris-x5-1": {
            "src": "assets/images/characters/iris_x5_1.png",
            "width": 1022,
            "height": 573,
            "alt": "아이리스 · 록맨 X5 삽화",
            "caption": "아이리스 · 록맨 X5 삽화",
            "source": "https://megamanwiki.com/wiki/Iris",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/9/9b/MMX5_-_Iris_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X5",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "dynamo-x6-1": {
            "src": "assets/images/characters/dynamo_x6_1.png",
            "width": 3400,
            "height": 2748,
            "alt": "다이나모 · 록맨 X6 삽화",
            "caption": "다이나모 · 록맨 X6 삽화",
            "source": "https://megamanwiki.com/wiki/Dynamo",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/5/5e/MMX6_-_Dynamo_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "light-x8-1": {
            "src": "assets/images/characters/light_x8_1.jpg",
            "width": 1100,
            "height": 1200,
            "alt": "라이트 박사 · 록맨 X8 삽화",
            "caption": "라이트 박사 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Dr._Light",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/4/43/MMX8_-_Dr._Light_Art.jpg",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x2-1": {
            "src": "assets/images/characters/sigma_x2_1.png",
            "width": 639,
            "height": 986,
            "alt": "시그마 · 록맨 X2 삽화",
            "caption": "시그마 · 록맨 X2 삽화",
            "source": "https://www.fightersgeneration.com/characters5/sigma.html",
            "original": "https://www.fightersgeneration.com/nf/char2/sigma/sigma-x2.png",
            "sourceLabel": "The Fighters Generation (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X2",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x6-1": {
            "src": "assets/images/characters/sigma_x6_1.jpg",
            "width": 1068,
            "height": 763,
            "alt": "시그마 · 록맨 X6 삽화",
            "caption": "시그마 · 록맨 X6 삽화",
            "source": "https://www.fightersgeneration.com/characters5/sigma.html",
            "original": "https://www.fightersgeneration.com/nf/char2/sigma/sigma-megamanx6.jpg",
            "sourceLabel": "The Fighters Generation (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X6",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-x2-2": {
            "src": "assets/images/characters/sigma_x2_2.jpg",
            "width": 1504,
            "height": 1106,
            "alt": "시그마 · 록맨 X2 삽화",
            "caption": "시그마 · 록맨 X2 삽화 2",
            "source": "https://www.fightersgeneration.com/characters5/sigma.html",
            "original": "https://www.fightersgeneration.com/nf/char2/sigma/mmx2-neo-sigma.jpg",
            "sourceLabel": "The Fighters Generation (팬 자료)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X2",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "vava-x3-1": {
            "src": "assets/images/characters/vava_x3_1.png",
            "width": 500,
            "height": 750,
            "alt": "바바 · 록맨 X3 삽화",
            "caption": "바바 · 록맨 X3 삽화",
            "source": "https://megamanwiki.com/wiki/Vile",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/6/61/MMX3_-_Vile_MK-II_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X3",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "vava-x8-1": {
            "src": "assets/images/characters/vava_x8_1.png",
            "width": 700,
            "height": 800,
            "alt": "바바 · 록맨 X8 삽화",
            "caption": "바바 · 록맨 X8 삽화",
            "source": "https://megamanwiki.com/wiki/Vile",
            "original": "https://megamanwiki.s3.us-east-va.io.cloud.ovh.us/2/2b/MMX8_-_Vile_V_Art.png",
            "sourceLabel": "Mega Man Wiki (팬 위키)",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "X8",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "x-xdive-1": {
            "src": "assets/images/characters/x_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "엑스 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "엑스 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_1.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "zero-xdive-1": {
            "src": "assets/images/characters/zero_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "제로 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "제로 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_2.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "alia-xdive-1": {
            "src": "assets/images/characters/alia_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "에이리아 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "에이리아 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_3.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "axl-xdive-1": {
            "src": "assets/images/characters/axl_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "엑셀 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "엑셀 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_4.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "vava-xdive-1": {
            "src": "assets/images/characters/vava_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "바바 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "바바 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_6.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "palette-xdive-1": {
            "src": "assets/images/characters/palette_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "팔렛트 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "팔렛트 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_8.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "layer-xdive-1": {
            "src": "assets/images/characters/layer_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "레이야 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "레이야 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_15.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "iris-xdive-1": {
            "src": "assets/images/characters/iris_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "아이리스 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "아이리스 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_20.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        },
        "sigma-xdive-1": {
            "src": "assets/images/characters/sigma_xdive_1.jpg",
            "width": 1200,
            "height": 750,
            "alt": "시그마 · 록맨 X DiVE 공식 소개 이미지",
            "caption": "시그마 · 록맨 X DiVE 공식 소개 이미지",
            "source": "https://rxd.capcom.com.tw/en/character.html",
            "original": "https://rxd.capcom.com.tw/assets/images/chara/ch_22.jpg",
            "sourceLabel": "CAPCOM 공식 사이트",
            "copyright": "© CAPCOM",
            "reviewedAt": "2026-10-25",
            "workId": "XDiVE",
            "note": "원본 비율과 구도를 유지해 표시합니다."
        }
    },
    "characters": {
        "x": {
            "portrait": "person-x",
            "artwork": "person-x",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-x"
                    ],
                    "note": ""
                },
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "x-x2-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "x-x3-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "x-x4-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "x-x5-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "x-x6-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "x-x7-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "x-x8-1"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "x-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "zero": {
            "portrait": "person-zero",
            "artwork": "person-zero",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-zero"
                    ],
                    "note": ""
                },
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "zero-x2-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "zero-x3-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "zero-x4-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "zero-x5-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "zero-x6-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "zero-x7-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "zero-x8-1"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "zero-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "axl": {
            "portrait": "person-axl",
            "artwork": "person-axl",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-axl"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "axl-x8-1"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "axl-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "signas": {
            "portrait": "person-signas",
            "artwork": "person-signas",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-signas"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "signas-x6-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "signas-x7-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "signas-x8-1"
                    ],
                    "note": ""
                }
            ]
        },
        "alia": {
            "portrait": "person-alia",
            "artwork": "person-alia",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "alia-x5-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "alia-x6-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "alia-x7-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-alia"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "alia-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "douglas": {
            "portrait": "person-douglas",
            "artwork": "person-douglas",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-douglas"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "douglas-x6-1"
                    ],
                    "note": ""
                }
            ]
        },
        "layer": {
            "portrait": "person-layer",
            "artwork": "person-layer",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-layer"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "layer-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "palette": {
            "portrait": "person-palette",
            "artwork": "person-palette",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-palette"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "palette-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "vava": {
            "portrait": "person-vava",
            "artwork": "person-vava",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-vava"
                    ],
                    "note": ""
                },
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "vava-x3-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "vava-x8-1"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "vava-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "sigma": {
            "portrait": "person-sigma",
            "artwork": "person-sigma",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-sigma"
                    ],
                    "note": ""
                },
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x2-1",
                        "sigma-x2-2"
                    ],
                    "note": ""
                },
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x3-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x4-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x5-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x6-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x7-1"
                    ],
                    "note": ""
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "sigma-x8-1"
                    ],
                    "note": ""
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "sigma-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "sagesse": {
            "portrait": "person-sagesse",
            "artwork": "person-sagesse",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-sagesse"
                    ],
                    "note": ""
                }
            ]
        },
        "violen": {
            "portrait": "person-violen",
            "artwork": "person-violen",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-violen"
                    ],
                    "note": ""
                }
            ]
        },
        "agile": {
            "portrait": "person-agile",
            "artwork": "person-agile",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-agile"
                    ],
                    "note": ""
                }
            ]
        },
        "doppler": {
            "portrait": "person-doppler",
            "artwork": "person-doppler",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-doppler"
                    ],
                    "note": ""
                }
            ]
        },
        "bit": {
            "portrait": "person-bit",
            "artwork": "person-bit",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-bit"
                    ],
                    "note": ""
                }
            ]
        },
        "byte": {
            "portrait": "person-byte",
            "artwork": "person-byte",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-byte"
                    ],
                    "note": ""
                }
            ]
        },
        "iris": {
            "portrait": "person-iris",
            "artwork": "person-iris",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-iris"
                    ],
                    "note": ""
                },
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "iris-x5-1"
                    ],
                    "note": "제로 엔딩의 회상 출연"
                },
                {
                    "series": "XDiVE",
                    "title": "외전 · X DiVE",
                    "scope": "supplement",
                    "assetIds": [
                        "iris-xdive-1"
                    ],
                    "note": "X DiVE 공식 사이트의 소개 이미지입니다. 외전의 수록 이미지를 본편 연혁의 근거로 사용하지 않습니다."
                }
            ]
        },
        "general": {
            "portrait": "person-general",
            "artwork": "person-general",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-general"
                    ],
                    "note": ""
                }
            ]
        },
        "colonel": {
            "portrait": "person-colonel",
            "artwork": "person-colonel",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-colonel"
                    ],
                    "note": ""
                }
            ]
        },
        "double": {
            "portrait": "person-double",
            "artwork": "person-double",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-double"
                    ],
                    "note": ""
                }
            ]
        },
        "dynamo": {
            "portrait": "person-dynamo",
            "artwork": "person-dynamo",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-dynamo"
                    ],
                    "note": ""
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "dynamo-x6-1"
                    ],
                    "note": ""
                }
            ]
        },
        "gate": {
            "portrait": "person-gate",
            "artwork": "person-gate",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-gate"
                    ],
                    "note": ""
                }
            ]
        },
        "isoc": {
            "portrait": "person-isoc",
            "artwork": "person-isoc",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-isoc"
                    ],
                    "note": ""
                }
            ]
        },
        "highmax": {
            "portrait": "person-highmax",
            "artwork": "person-highmax",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-highmax"
                    ],
                    "note": ""
                }
            ]
        },
        "red": {
            "portrait": "person-red",
            "artwork": "person-red",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-red"
                    ],
                    "note": ""
                }
            ]
        },
        "lumine": {
            "portrait": "person-lumine",
            "artwork": "person-lumine",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-lumine"
                    ],
                    "note": ""
                }
            ]
        },
        "light": {
            "portrait": "person-light",
            "artwork": "person-light",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [],
                    "note": "X1~X8의 등장은 주로 홀로그램·메시지이며, 생존한 인간으로 활동하는 것이 아닙니다."
                },
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                },
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                },
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                },
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                },
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                },
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                },
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "light-x8-1"
                    ],
                    "note": ""
                },
                {
                    "series": "MM11",
                    "title": "클래식 · 록맨 11",
                    "scope": "supplement",
                    "assetIds": [
                        "person-light"
                    ],
                    "note": "클래식 시리즈의 외형 참고용 삽화입니다. X 시리즈에서 등장하는 당시 모습과 구분합니다."
                }
            ]
        },
        "cain": {
            "portrait": "person-cain",
            "artwork": "person-cain",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [],
                    "note": "배경 기록 출연"
                },
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-cain"
                    ],
                    "note": ""
                },
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [],
                    "note": "현재 이 자료집에서는 해당 작품의 삽화를 확인하지 못했습니다."
                }
            ]
        },
        "wily": {
            "portrait": "person-wily",
            "artwork": "person-wily",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [],
                    "note": "꿈·과거의 이미지"
                },
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [],
                    "note": "회상·대사상의 암시"
                },
                {
                    "series": "MM11",
                    "title": "클래식 · 록맨 11",
                    "scope": "supplement",
                    "assetIds": [
                        "person-wily"
                    ],
                    "note": "클래식 시리즈의 외형 참고용 삽화입니다. X 시리즈에서 등장하는 당시 모습과 구분합니다."
                }
            ]
        },
        "chill_penguin": {
            "portrait": "person-chill_penguin",
            "artwork": "person-chill_penguin",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-chill_penguin"
                    ],
                    "note": ""
                }
            ]
        },
        "spark_mandrill": {
            "portrait": "person-spark_mandrill",
            "artwork": "person-spark_mandrill",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-spark_mandrill"
                    ],
                    "note": ""
                }
            ]
        },
        "armored_armadillo": {
            "portrait": "person-armored_armadillo",
            "artwork": "person-armored_armadillo",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-armored_armadillo"
                    ],
                    "note": ""
                }
            ]
        },
        "launch_octopus": {
            "portrait": "person-launch_octopus",
            "artwork": "person-launch_octopus",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-launch_octopus"
                    ],
                    "note": ""
                }
            ]
        },
        "boomer_kuwanger": {
            "portrait": "person-boomer_kuwanger",
            "artwork": "person-boomer_kuwanger",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-boomer_kuwanger"
                    ],
                    "note": ""
                }
            ]
        },
        "sting_chameleon": {
            "portrait": "person-sting_chameleon",
            "artwork": "person-sting_chameleon",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-sting_chameleon"
                    ],
                    "note": ""
                }
            ]
        },
        "storm_eagle": {
            "portrait": "person-storm_eagle",
            "artwork": "person-storm_eagle",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-storm_eagle"
                    ],
                    "note": ""
                }
            ]
        },
        "flame_mammoth": {
            "portrait": "person-flame_mammoth",
            "artwork": "person-flame_mammoth",
            "gallery": [
                {
                    "series": "X1",
                    "title": "X1",
                    "scope": "main",
                    "assetIds": [
                        "person-flame_mammoth"
                    ],
                    "note": ""
                }
            ]
        },
        "wire_sponge": {
            "portrait": "person-wire_sponge",
            "artwork": "person-wire_sponge",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-wire_sponge"
                    ],
                    "note": ""
                }
            ]
        },
        "wheel_gator": {
            "portrait": "person-wheel_gator",
            "artwork": "person-wheel_gator",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-wheel_gator"
                    ],
                    "note": ""
                }
            ]
        },
        "bubble_crab": {
            "portrait": "person-bubble_crab",
            "artwork": "person-bubble_crab",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-bubble_crab"
                    ],
                    "note": ""
                }
            ]
        },
        "flame_stag": {
            "portrait": "person-flame_stag",
            "artwork": "person-flame_stag",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-flame_stag"
                    ],
                    "note": ""
                }
            ]
        },
        "morph_moth": {
            "portrait": "person-morph_moth",
            "artwork": "person-morph_moth",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-morph_moth"
                    ],
                    "note": ""
                }
            ]
        },
        "magna_centipede": {
            "portrait": "person-magna_centipede",
            "artwork": "person-magna_centipede",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-magna_centipede"
                    ],
                    "note": ""
                }
            ]
        },
        "crystal_snail": {
            "portrait": "person-crystal_snail",
            "artwork": "person-crystal_snail",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-crystal_snail"
                    ],
                    "note": ""
                }
            ]
        },
        "overdrive_ostrich": {
            "portrait": "person-overdrive_ostrich",
            "artwork": "person-overdrive_ostrich",
            "gallery": [
                {
                    "series": "X2",
                    "title": "X2",
                    "scope": "main",
                    "assetIds": [
                        "person-overdrive_ostrich"
                    ],
                    "note": ""
                }
            ]
        },
        "blizzard_buffalo": {
            "portrait": "person-blizzard_buffalo",
            "artwork": "person-blizzard_buffalo",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-blizzard_buffalo"
                    ],
                    "note": ""
                }
            ]
        },
        "toxic_seahorse": {
            "portrait": "person-toxic_seahorse",
            "artwork": "person-toxic_seahorse",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-toxic_seahorse"
                    ],
                    "note": ""
                }
            ]
        },
        "tunnel_rhino": {
            "portrait": "person-tunnel_rhino",
            "artwork": "person-tunnel_rhino",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-tunnel_rhino"
                    ],
                    "note": ""
                }
            ]
        },
        "volt_catfish": {
            "portrait": "person-volt_catfish",
            "artwork": "person-volt_catfish",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-volt_catfish"
                    ],
                    "note": ""
                }
            ]
        },
        "crush_crawfish": {
            "portrait": "person-crush_crawfish",
            "artwork": "person-crush_crawfish",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-crush_crawfish"
                    ],
                    "note": ""
                }
            ]
        },
        "neon_tiger": {
            "portrait": "person-neon_tiger",
            "artwork": "person-neon_tiger",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-neon_tiger"
                    ],
                    "note": ""
                }
            ]
        },
        "gravity_beetle": {
            "portrait": "person-gravity_beetle",
            "artwork": "person-gravity_beetle",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-gravity_beetle"
                    ],
                    "note": ""
                }
            ]
        },
        "blast_hornet": {
            "portrait": "person-blast_hornet",
            "artwork": "person-blast_hornet",
            "gallery": [
                {
                    "series": "X3",
                    "title": "X3",
                    "scope": "main",
                    "assetIds": [
                        "person-blast_hornet"
                    ],
                    "note": ""
                }
            ]
        },
        "web_spider": {
            "portrait": "person-web_spider",
            "artwork": "person-web_spider",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-web_spider"
                    ],
                    "note": ""
                }
            ]
        },
        "split_mushroom": {
            "portrait": "person-split_mushroom",
            "artwork": "person-split_mushroom",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-split_mushroom"
                    ],
                    "note": ""
                }
            ]
        },
        "cyber_peacock": {
            "portrait": "person-cyber_peacock",
            "artwork": "person-cyber_peacock",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-cyber_peacock"
                    ],
                    "note": ""
                }
            ]
        },
        "storm_owl": {
            "portrait": "person-storm_owl",
            "artwork": "person-storm_owl",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-storm_owl"
                    ],
                    "note": ""
                }
            ]
        },
        "magma_dragoon": {
            "portrait": "person-magma_dragoon",
            "artwork": "person-magma_dragoon",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-magma_dragoon"
                    ],
                    "note": ""
                }
            ]
        },
        "frost_walrus": {
            "portrait": "person-frost_walrus",
            "artwork": "person-frost_walrus",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-frost_walrus"
                    ],
                    "note": ""
                }
            ]
        },
        "jet_stingray": {
            "portrait": "person-jet_stingray",
            "artwork": "person-jet_stingray",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-jet_stingray"
                    ],
                    "note": ""
                }
            ]
        },
        "slash_beast": {
            "portrait": "person-slash_beast",
            "artwork": "person-slash_beast",
            "gallery": [
                {
                    "series": "X4",
                    "title": "X4",
                    "scope": "main",
                    "assetIds": [
                        "person-slash_beast"
                    ],
                    "note": ""
                }
            ]
        },
        "crescent_grizzly": {
            "portrait": "person-crescent_grizzly",
            "artwork": "person-crescent_grizzly",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-crescent_grizzly"
                    ],
                    "note": ""
                }
            ]
        },
        "volt_kraken": {
            "portrait": "person-volt_kraken",
            "artwork": "person-volt_kraken",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-volt_kraken"
                    ],
                    "note": ""
                }
            ]
        },
        "shining_firefly": {
            "portrait": "person-shining_firefly",
            "artwork": "person-shining_firefly",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-shining_firefly"
                    ],
                    "note": ""
                }
            ]
        },
        "tidal_whale": {
            "portrait": "person-tidal_whale",
            "artwork": "person-tidal_whale",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-tidal_whale"
                    ],
                    "note": ""
                }
            ]
        },
        "spiral_pegasus": {
            "portrait": "person-spiral_pegasus",
            "artwork": "person-spiral_pegasus",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-spiral_pegasus"
                    ],
                    "note": ""
                }
            ]
        },
        "spike_rosered": {
            "portrait": "person-spike_rosered",
            "artwork": "person-spike_rosered",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-spike_rosered"
                    ],
                    "note": ""
                }
            ]
        },
        "dark_necrobat": {
            "portrait": "person-dark_necrobat",
            "artwork": "person-dark_necrobat",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-dark_necrobat"
                    ],
                    "note": ""
                }
            ]
        },
        "burn_dinorex": {
            "portrait": "person-burn_dinorex",
            "artwork": "person-burn_dinorex",
            "gallery": [
                {
                    "series": "X5",
                    "title": "X5",
                    "scope": "main",
                    "assetIds": [
                        "person-burn_dinorex"
                    ],
                    "note": ""
                }
            ]
        },
        "commander_yammark": {
            "portrait": "person-commander_yammark",
            "artwork": "person-commander_yammark",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-commander_yammark"
                    ],
                    "note": ""
                }
            ]
        },
        "ground_scaravich": {
            "portrait": "person-ground_scaravich",
            "artwork": "person-ground_scaravich",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-ground_scaravich"
                    ],
                    "note": ""
                }
            ]
        },
        "blaze_heatnix": {
            "portrait": "person-blaze_heatnix",
            "artwork": "person-blaze_heatnix",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-blaze_heatnix"
                    ],
                    "note": ""
                }
            ]
        },
        "blizzard_wolfang": {
            "portrait": "person-blizzard_wolfang",
            "artwork": "person-blizzard_wolfang",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-blizzard_wolfang"
                    ],
                    "note": ""
                }
            ]
        },
        "rainy_turtloid": {
            "portrait": "person-rainy_turtloid",
            "artwork": "person-rainy_turtloid",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-rainy_turtloid"
                    ],
                    "note": ""
                }
            ]
        },
        "metal_shark_player": {
            "portrait": "person-metal_shark_player",
            "artwork": "person-metal_shark_player",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-metal_shark_player"
                    ],
                    "note": ""
                }
            ]
        },
        "shield_sheldon": {
            "portrait": "person-shield_sheldon",
            "artwork": "person-shield_sheldon",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-shield_sheldon"
                    ],
                    "note": ""
                }
            ]
        },
        "infinity_mijinion": {
            "portrait": "person-infinity_mijinion",
            "artwork": "person-infinity_mijinion",
            "gallery": [
                {
                    "series": "X6",
                    "title": "X6",
                    "scope": "main",
                    "assetIds": [
                        "person-infinity_mijinion"
                    ],
                    "note": ""
                }
            ]
        },
        "soldier_stonekong": {
            "portrait": "person-soldier_stonekong",
            "artwork": "person-soldier_stonekong",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-soldier_stonekong"
                    ],
                    "note": ""
                }
            ]
        },
        "tornado_tonion": {
            "portrait": "person-tornado_tonion",
            "artwork": "person-tornado_tonion",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-tornado_tonion"
                    ],
                    "note": ""
                }
            ]
        },
        "splash_warfly": {
            "portrait": "person-splash_warfly",
            "artwork": "person-splash_warfly",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-splash_warfly"
                    ],
                    "note": ""
                }
            ]
        },
        "flame_hyenard": {
            "portrait": "person-flame_hyenard",
            "artwork": "person-flame_hyenard",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-flame_hyenard"
                    ],
                    "note": ""
                }
            ]
        },
        "ride_boarski": {
            "portrait": "person-ride_boarski",
            "artwork": "person-ride_boarski",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-ride_boarski"
                    ],
                    "note": ""
                }
            ]
        },
        "snipe_anteator": {
            "portrait": "person-snipe_anteator",
            "artwork": "person-snipe_anteator",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-snipe_anteator"
                    ],
                    "note": ""
                }
            ]
        },
        "wind_crowrang": {
            "portrait": "person-wind_crowrang",
            "artwork": "person-wind_crowrang",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-wind_crowrang"
                    ],
                    "note": ""
                }
            ]
        },
        "vanishing_gungaroo": {
            "portrait": "person-vanishing_gungaroo",
            "artwork": "person-vanishing_gungaroo",
            "gallery": [
                {
                    "series": "X7",
                    "title": "X7",
                    "scope": "main",
                    "assetIds": [
                        "person-vanishing_gungaroo"
                    ],
                    "note": ""
                }
            ]
        },
        "optic_sunflower": {
            "portrait": "person-optic_sunflower",
            "artwork": "person-optic_sunflower",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-optic_sunflower"
                    ],
                    "note": ""
                }
            ]
        },
        "gravity_antonion": {
            "portrait": "person-gravity_antonion",
            "artwork": "person-gravity_antonion",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-gravity_antonion"
                    ],
                    "note": ""
                }
            ]
        },
        "earthrock_trilobyte": {
            "portrait": "person-earthrock_trilobyte",
            "artwork": "person-earthrock_trilobyte",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-earthrock_trilobyte"
                    ],
                    "note": ""
                }
            ]
        },
        "gigabolt_manowar": {
            "portrait": "person-gigabolt_manowar",
            "artwork": "person-gigabolt_manowar",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-gigabolt_manowar"
                    ],
                    "note": ""
                }
            ]
        },
        "avalanche_yeti": {
            "portrait": "person-avalanche_yeti",
            "artwork": "person-avalanche_yeti",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-avalanche_yeti"
                    ],
                    "note": ""
                }
            ]
        },
        "burn_rooster": {
            "portrait": "person-burn_rooster",
            "artwork": "person-burn_rooster",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-burn_rooster"
                    ],
                    "note": ""
                }
            ]
        },
        "bamboo_pandamonium": {
            "portrait": "person-bamboo_pandamonium",
            "artwork": "person-bamboo_pandamonium",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-bamboo_pandamonium"
                    ],
                    "note": ""
                }
            ]
        },
        "dark_mantis": {
            "portrait": "person-dark_mantis",
            "artwork": "person-dark_mantis",
            "gallery": [
                {
                    "series": "X8",
                    "title": "X8",
                    "scope": "main",
                    "assetIds": [
                        "person-dark_mantis"
                    ],
                    "note": ""
                }
            ]
        }
    },
    "eras": {
        "classic": "classic",
        "x-era": "x-banner",
        "zero-era": "zero-zx",
        "zx-era": "zero-zx"
    }
};

if (typeof window !== 'undefined') window.mediaData = mediaData;
if (typeof module !== 'undefined') module.exports = { mediaData };
