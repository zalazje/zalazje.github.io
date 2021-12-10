import { default as ReactDOM } from 'react-dom';
import { default as React } from 'react';
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./main.css";

const wrapper = document.getElementById('root');

const configApp = {
    header: {
        title: 'Залазье',
        instagram: 'https://www.instagram.com/zalazje/',
        menu: [
            { route: '/home', title: 'Главная' },
            { route: '/map', title: 'Карта' },
            { route: '/cemetery', title: 'Кладбище' },
            { route: '/1925', title: '1925' },
        ],
    },

    main: {
        spreadsheets: {
            Page1925: {
                title: '1925',
                src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFHD1PUUuamOCUAD7At3DyUIlgM7ob1TUfgr7CO5MM39uVtPMsx1Z49I1Mpkkvw75ZAX1L72E__F6j/pubhtml'
            },
            CemeteryPage: {
                title: 'Кладбище',
                src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnifnN_fVT2nlcTiB_PmDCeviAN-p1nonM1tqHHtrxY6oYHaXddd4UQ_3Dd42bnSkqFhjDoEPAw8Dv/pubhtml'
            }
        },
        map: {
            hatyArr: [
                {
                    coordinates: [ 54.255198, 29.405763 ],
                    title: "Хата",
                },
                {
                    coordinates: [ 54.254854, 29.405381 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.255082, 29.406040 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.255474, 29.406107 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.255536, 29.405626 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.255941, 29.406558 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.256148, 29.407207 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.256607, 29.406671 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.256885, 29.406614 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.257062, 29.407202 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.257424, 29.406785 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.255659, 29.406595 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.254740, 29.405596 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.254630, 29.405057 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.255292, 29.406246 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.255420, 29.406375 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.254851, 29.405714 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.254968, 29.405520 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.254666, 29.404483 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.254379, 29.405088 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.253849, 29.403992 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.253673, 29.403658 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.251771, 29.400893 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.252225, 29.401532 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.251444, 29.401376 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.251780, 29.401918 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.251506, 29.400861 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.257106, 29.406827 ],
                    title: 'Хата уже не существует'
                },
                {
                    coordinates: [ 54.256382, 29.406757 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.256673, 29.407038 ],
                    title: 'Хата уже не существует'
                },
                {
                    coordinates: [ 54.254551, 29.405342 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.254424, 29.404818 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.254187, 29.404383 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.254026, 29.404179 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.253626, 29.404096 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.253342, 29.403190 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.253436, 29.403423 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.253882, 29.403670 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.253132, 29.402436 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.252720, 29.402096 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.252983, 29.403237 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.252807, 29.402647 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.252426, 29.402125 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.252531, 29.401434 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.252049, 29.402079 ],
                    title: 'Хата уже не существует',
                },
                {
                    coordinates: [ 54.252089, 29.401100 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.251609, 29.401608 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.295112, 29.452314 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.298613, 29.444132 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.276899, 29.409993 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.287196, 29.431088 ],
                    title: 'Хата',
                },
                {
                    coordinates: [ 54.295794, 29.443427 ],
                    title: 'Хата',
                },
            ],
            objectsArr: [
                {
                    coordinates: [ 54.253993, 29.404671 ],
                    title: 'д.Залазье',
                    discription: '',
                    zoom: 16,
                },
                {
                    coordinates: [ 54.278724, 29.413187 ],
                    title: 'д.Горожоны',
                    discription: '',
                    zoom: 15,
                },
                {
                    coordinates: [ 54.271280, 29.415169 ],
                    title: 'старые Горожоны',
                    discription: `Старое расположение Горожон (примерно).
Тут в основном жили евреи.
Вроде в 1936, стали людей сгонять с хуторов и мелких деревень в курпные деревни.
И получается, сегодняшние Горожоны, это место, куда переселились люди с окресных мест.
А сами евреи переехали в Славное.`,
                    zoom: 16,
                },
                {
                    coordinates: [ 54.271583, 29.393463 ],
                    title: 'Замостье',
                    discription: `
Тут был застенок Замостье. В нем жили католики по вереисповеданию, поляки по национальности и мещане по сословию.
`,
                    zoom: 15,
                },
            ],
            photos: [
                {
                    coordinates: [ 54.247500, 29.395666 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0004.jpg?alt=media&token=743954d3-220b-465e-a6a8-82fca0c135b1`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0004.jpg?alt=media&token=fb349682-46c7-49cf-b6d7-fb32216181b5`,
                    title: `Дорога к гребле`
                },
                {
                    coordinates: [ 54.249345, 29.396481 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0021.jpg?alt=media&token=5d0aef54-bda9-4690-8484-952bb6122a36`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0021.jpg?alt=media&token=3ce0903d-bc57-4905-af12-f5e6cb78f074`,
                    title: `В сторону Залазья`
                },
                {
                    coordinates: [ 54.251984, 29.401864 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0023.jpg?alt=media&token=b2d887be-95cb-4a25-8c3c-beb468c67f72`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0023.jpg?alt=media&token=544421d6-0eb7-401d-819e-afd767dd79f6`,
                    title: `Залазье`
                },
                {
                    coordinates: [ 54.255169, 29.405956 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0028.jpg?alt=media&token=4d82ab90-ec31-466a-9927-9d6573ec1e95`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0028.jpg?alt=media&token=95c25587-5fe7-442d-918b-c4d854158af5`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.256201, 29.407255 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0035.jpg?alt=media&token=18a0a1de-a33e-49d3-b82b-9649b21ab588`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0035.jpg?alt=media&token=ec92f003-75b1-4a26-87ee-ec21c625c3fa`,
                    title: `Кладбище`
                },
                {
                    coordinates: [ 54.262685, 29.405409 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0039.jpg?alt=media&token=c2288ef2-147c-4ec2-9692-44ad77189a91`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0039.jpg?alt=media&token=1fc2f861-381a-4c6f-a205-cfd36edfd5f9`,
                    title: `От леса к Залазью`
                },
                {
                    coordinates: [ 54.270875, 29.412008 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_0045.jpg?alt=media&token=b2f07c46-d5cf-4783-8f9e-0cc2c9140da8`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_0045.jpg?alt=media&token=482c92e1-2d9e-4c58-9d53-c711c025999a`,
                    title: `р. Еленка`
                },
                {
                    coordinates: [ 54.255227, 29.405887 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_20211113_102441.jpg?alt=media&token=500b2c4c-4081-43a4-ba1f-58278894c806`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_20211113_102441.jpg?alt=media&token=23f43122-9c29-44d7-9273-7d80003e1380`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.266123, 29.404901 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_20211113_120457.jpg?alt=media&token=03df1ca9-e141-454a-a336-44305c0de2e7`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_20211113_120457.jpg?alt=media&token=c78d85f5-bc77-4c7a-88df-da028f05b99c`,
                    title: `страрая дорога на Горожоны`
                },
                {
                    coordinates: [ 54.254836, 29.405528 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_20211113_144936.jpg?alt=media&token=43fb3bf3-d369-49e2-888d-7fc59884603c`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_20211113_144936.jpg?alt=media&token=59ae4201-f522-4abf-a2f5-bb9b4d5e4ee6`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.254723, 29.405356 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_20211113_144954.jpg?alt=media&token=2ea098f4-3471-422d-bf46-81eddb9b6046`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_20211113_144954.jpg?alt=media&token=59d99a8e-26f8-40cf-ab27-78b153a2c845`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.254615, 29.405256 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_20211113_145024.jpg?alt=media&token=93cd1a53-6b10-4a1e-bb31-718eca1f7e85`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_20211113_145024.jpg?alt=media&token=aba038ca-efc6-474a-930d-e51b538065e8`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.255221, 29.405978 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9886.jpg?alt=media&token=a0c044d3-4e66-4e09-9cac-6a555d20df18`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9886.jpg?alt=media&token=4521c96e-2715-41a0-8a11-c6545096f18d`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.258577, 29.406541 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9891.jpg?alt=media&token=4b68ae2c-40e4-4c38-90e5-7bff31092db1`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9891.jpg?alt=media&token=078f6cfc-eeb3-42ff-b183-301f1e6c495e`,
                    title: `На Горожоны`
                },
                {
                    coordinates: [ 54.257949, 29.406884 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9895.jpg?alt=media&token=b56cc24f-7492-45af-90c0-47499c45b0c7`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9895.jpg?alt=media&token=3ed8171e-f508-4081-bba8-d28c117eada0`,
                    title: `Залазье`
                },
                {
                    coordinates: [ 54.257594, 29.408306 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9908.jpg?alt=media&token=748ad085-a24e-4f35-bf79-6b67550be240`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9908.jpg?alt=media&token=282cd01f-a6df-43b9-b4da-6186d83ba0d3`,
                    title: `Копань (Сажалка)`
                },
                {
                    coordinates: [ 54.256775, 29.406962 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9911.jpg?alt=media&token=9291d8c2-2bb4-40ef-8608-c92652a7fa1c`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9911.jpg?alt=media&token=1416e2b7-eeb2-4b7c-bb3c-2f24691c5a88`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.256834, 29.406919 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9915.jpg?alt=media&token=18d71b3a-3d37-44f6-a99b-2f6356563698`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9915.jpg?alt=media&token=f5b09555-72af-47c2-8c84-6b4d0139a93a`,
                    title: `Вид на остановку`
                },
                {
                    coordinates: [ 54.256498, 29.406914 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9924.jpg?alt=media&token=e1a3d2df-c814-4afa-905c-71f2c2be984b`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9924.jpg?alt=media&token=2c903fd5-c233-4bbb-8cdd-ed4a362925f2`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.256096, 29.406873 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9931.jpg?alt=media&token=6fb0d1b5-6f7a-4558-b209-cac9ca00a3fd`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9931.jpg?alt=media&token=1ce66f51-c374-400b-918a-191473c73866`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.255939, 29.406745 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9932.jpg?alt=media&token=5ef726ae-04f9-4fc3-a632-287f3168daf7`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9932.jpg?alt=media&token=181d5ccc-7e04-4b09-aee5-f5657279766a`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.255546, 29.406342 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9933.jpg?alt=media&token=4b5a64ce-75c4-4593-9faa-386180f168b2`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9933.jpg?alt=media&token=c05724b8-55bd-49b7-b09e-3390e0f2cfdc`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.254922, 29.405562 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9937.jpg?alt=media&token=3e8fa4ab-bdf7-4a19-8caf-bbce0dff8270`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9937.jpg?alt=media&token=5dbebec8-0672-4e6f-935d-e043ec950678`,
                    title: `Колодец`
                },
                {
                    coordinates: [ 54.254759, 29.405436 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9941.jpg?alt=media&token=3c2313e7-acbe-4a9c-ae20-dd90792d4bb2`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9941.jpg?alt=media&token=a1befe68-b21b-432a-a137-272a2b47e37d`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.254611, 29.405188 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9942.jpg?alt=media&token=dfd6dc6d-6285-49bb-8d8c-00051dc3a35d`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9942.jpg?alt=media&token=8f665843-4a4c-42d1-8d79-5ee07ab95fed`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.254672, 29.405186 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9943.jpg?alt=media&token=4e17a1ee-f40d-4100-a415-c1bd32e34faa`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9943.jpg?alt=media&token=ffb1463e-3ca7-4dfd-acbb-b52f3f271d9a`,
                    title: `Поле`
                },
                {
                    coordinates: [ 54.251529, 29.401291 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9944.jpg?alt=media&token=3c41c365-3180-4db7-9534-c286b7d8716f`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9944.jpg?alt=media&token=035687b2-a320-4df2-97db-75ecc409bb20`,
                    title: `Хаты`
                },
                {
                    coordinates: [ 54.252353, 29.402298 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9952.jpg?alt=media&token=686a3c37-9d96-40d8-9ca5-b12977eeab9e`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9952.jpg?alt=media&token=327a4af0-5773-4a1b-980a-093d07380542`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.253284, 29.403438 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9956.jpg?alt=media&token=1f71cb65-c485-488f-8b30-87e0dcb67053`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9956.jpg?alt=media&token=4e0eb4f8-85c1-4f2a-9cea-3ffff73ab997`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.253212, 29.403331 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9958.jpg?alt=media&token=547eec05-41dd-40cc-b970-50c7f0cd7d5b`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9958.jpg?alt=media&token=fe126898-e2d4-4ba5-bdee-0586db7ebc18`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.252929, 29.402998 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9961.jpg?alt=media&token=a54926e3-bee0-4cf8-9014-79c564f95998`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9961.jpg?alt=media&token=84772660-cd27-45c2-bc98-e51f5d37b12d`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.252519, 29.402477 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9964.jpg?alt=media&token=1704b815-1faa-47d7-90d5-e2958a096850`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9964.jpg?alt=media&token=20a037c2-b553-4737-a296-09f33548b0cc`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.252334, 29.402203 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9969.jpg?alt=media&token=cfeaddbb-6dfb-4913-a58a-bcd4d41c4cfa`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9969.jpg?alt=media&token=fbe1d765-ed21-4e66-b7d8-a00bcea5fd41`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251998, 29.401854 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9971.jpg?alt=media&token=7e7f1254-b746-4450-9ab7-561e4664879e`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9971.jpg?alt=media&token=9761b7b2-507f-42c0-8513-c2fa5446d2a2`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251674, 29.401436 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9976.jpg?alt=media&token=0a22e4cd-6cf6-41cf-aeb2-b924a5568cd7`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9976.jpg?alt=media&token=e504f36b-c622-41dd-8ebc-51aef2b12672`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251586, 29.401414 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9979.jpg?alt=media&token=e7d9e7a5-f80b-4cda-9a61-6ed8df5a312e`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9979.jpg?alt=media&token=cfa30cf4-a9b5-42fc-b8fd-25a981eb0b41`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251420, 29.401157 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9981.jpg?alt=media&token=8790710b-ecbc-4af0-8bea-1da67b32e7e4`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9981.jpg?alt=media&token=592ce5db-eb18-4a8c-a8a0-16155cc34009`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251123, 29.399105 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9992.jpg?alt=media&token=fddde0f8-47fc-4f51-a57e-d8cb2ae5b299`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9992.jpg?alt=media&token=9d43a699-5db6-468a-9ae4-76a9fc5df76b`,
                    title: `Дорога на Боровцы`
                },
                {
                    coordinates: [ 54.249209, 29.396129 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2FIMG_9999.jpg?alt=media&token=fb50ef25-3a46-4df5-9662-f87cc0ed52fe`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2FIMG_9999.jpg?alt=media&token=92fa1dd2-3735-43a1-83d3-cc97f63dfba5`,
                    title: `К д.Дубавое (через гребелю) и к д.Боровцы`
                },
                {
                    coordinates: [ 54.256260, 29.407141 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-05-11_17-26-28.jpg?alt=media&token=54dc2d6e-fdf8-4f43-a89a-e84960d6f7c3`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-05-11_17-26-28.jpg?alt=media&token=05e8e110-57b7-455e-9013-a3680c1a6583`,
                    title: `Вид на остановку`
                },
                {
                    coordinates: [ 54.256295, 29.407013 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-05-11_17-26-35.jpg?alt=media&token=7f373c4c-0538-449f-8e37-fdc68c13d22e`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-05-11_17-26-35.jpg?alt=media&token=920ac619-70ac-46a6-8e95-e13e29e6d33e`,
                    title: `Вид на остановку`
                },
                {
                    coordinates: [ 54.255757, 29.406583 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-05-11_17-26-45.jpg?alt=media&token=e7f661c2-b55f-40ba-a8f7-28ec4c2154eb`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-05-11_17-26-45.jpg?alt=media&token=0aadf2aa-9e89-4534-948f-d894c1b045aa`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251232, 29.400598 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-10.jpg?alt=media&token=13d81503-2eb9-4de3-bb0f-3e2c5058ad39`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-10.jpg?alt=media&token=c080da7d-00b9-4ac5-a676-589af61dcbaf`,
                    title: `Конец деревни`
                },
                {
                    coordinates: [ 54.251688, 29.401409 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-11.jpg?alt=media&token=db3eb269-9157-41ae-8744-390fe80c7181`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-11.jpg?alt=media&token=2aca2eea-9948-4121-aa6b-fb1b9a02ed32`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251808, 29.401648 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-13.jpg?alt=media&token=03fc9670-a98a-4da7-9775-a20233e02b98`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-13.jpg?alt=media&token=018f14fb-a80d-478c-add9-061f62c21ff3`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.251897, 29.401497 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-14.jpg?alt=media&token=d5138ca9-dee6-4d78-9d0f-219a99d62ddd`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-14.jpg?alt=media&token=a5299a57-5449-4726-9aa6-b87b18dd4862`,
                    title: `??? где это`
                },
                {
                    coordinates: [ 54.252613, 29.402572 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-16.jpg?alt=media&token=c83f32d6-9d63-4993-a749-cb874aacb8dd`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-16.jpg?alt=media&token=0cbd7830-874f-44ac-8fee-91073770b293`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.253320, 29.403461 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-17.jpg?alt=media&token=d1416101-8e16-4718-a378-92eb703e0316`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-17.jpg?alt=media&token=c7c44ccc-6129-49dc-b791-f31173a3fb05`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.254947, 29.405636 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-22.jpg?alt=media&token=f3f1b1fa-3264-472f-ae79-9233ec12eb69`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-22.jpg?alt=media&token=603bd27a-229f-4ecf-84b2-6151a967bae6`,
                    title: `Колодец`
                },
                {
                    coordinates: [ 54.254825, 29.405582 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-24.jpg?alt=media&token=fe5dde1d-0b26-4000-b05d-f65bc00204df`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-24.jpg?alt=media&token=19891666-e3bb-4c90-8319-c8754f310b55`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.255909, 29.406713 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-25.jpg?alt=media&token=60019a5c-bbfa-4d48-b20c-d6657756fb6d`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-25.jpg?alt=media&token=202ae4b7-4289-43fd-af17-3f7017019fa8`,
                    title: `Залазье`
                },
                {
                    coordinates: [ 54.257153, 29.407056 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-29.jpg?alt=media&token=1c960aa7-5ab9-481f-a8fa-8e3195b53283`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-29.jpg?alt=media&token=e9f45e73-8ee6-45d5-9415-209171d04c4d`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 54.257713, 29.406927 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Fpreview%2Fphoto_2021-06-06_11-09-36.jpg?alt=media&token=3c5cfede-7d6c-4675-b0cf-8a9f1814eaa1`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/zalazje%2Forig%2Fphoto_2021-06-06_11-09-36.jpg?alt=media&token=4987c523-1a03-44a8-84fe-8016e1d10431`,
                    title: `Начало деревни`
                },
            ],
            churches: [
                {
                    coordinates: [ 54.339246, 29.399816 ],
                    title: 'Молявка',
                    discription: `
Церковь и Молявский православный приход Михаила Архангела.<br>
Тут, в Молявке, до революции находилась православная церковь, к которой отнисилось Залазье, Зяблица, Курчи, Ахуты, Глинники, Ильяни и Еленка.
Крещения, свдьбы и отпевания уопших регистрировали тут.
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.241360, 29.543191 ],
                    title: 'Круча',
                    discription: `
Церковь и Кручанский православный приход Святой Троицы.
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.216268, 29.641590 ],
                    title: 'Павловичи',
                    discription: `
Церковь и Павловичский православный приход Святых Апостолов Петра и Павла.
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.125585, 29.559917 ],
                    title: 'Шепелевичи',
                    discription: `
Церковь и Шепелевичский православный приход Святой Троицы.
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.341785, 29.274571 ],
                    title: 'Бобр',
                    discription: `
Церковь и Бобрский православный приход святителя Николая.
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.104204, 29.216826 ],
                    title: 'Ухвала',
                    discription: `
Церковь и Ухвальский православный приход Успения Пресвятой Богородицы.<br>
Успенская церковь в селе Ухвалы, 5-го класса, деревянная, построенная в 1823 году прихожанами. Штатного годичного жалованья причту 236 р. Земли усадебной, пахатной и сенокосной 33 десятины. Прихожан мужского пола 513 душ и женского 523 души.
<br>
К ухвальской церкви принадлежат кладбищенские церкви:<br>
1) Свято-Михайловская церковь в деревне Забинково, деревяная, построенная прихожанами;<br>
2) Покровская церковь в деревне Гибойловичи, деревянная, построе...
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.017037, 29.549742 ],
                    title: 'Эсьмоны',
                    discription: `
Церковь и Эсьмонский православный приход Святой Троицы.
`,
                    zoom: 15,
                },
                {
                    coordinates: [ 54.133030, 29.213156 ],
                    title: 'Старый Сокол',
                    discription: `
Приписная церковь Покрова Пресвятой Богородицы.
`,
                    zoom: 15,
                },
            ],
        }
    },
};

ReactDOM.render(
    <BrowserRouter>
        <App config={configApp} />
    </BrowserRouter>
, wrapper);
