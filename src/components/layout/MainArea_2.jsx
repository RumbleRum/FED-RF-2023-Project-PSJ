// MainArea 컴포넌트


import { useInView } from "react-intersection-observer";
import "../../css/ani.css";

export function MainArea2() {
   
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
      });

    return (
        <>
            <section className="main inbox">
                <div className="ep ep2">
                    <div className="flex-box">
                        <div className="partbox col-12 ep2-1">
                            <h1 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                <p>
                                Las Vegas

                                </p>
                                </h1>
                        </div>
                        <div className="partbox col-12 video1">
                            <video id="myVideo" width="45%" height="auto" loop autoPlay muted>
                                <source src="./images/videoplayback.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="partbox col-12 ep2-1">
                            <h1 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                <p>
                                Resorts World

                                </p>
                                </h1>
                        </div>
                        <div className="partbox col-12 ep2-2">
                            <h1 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                <p>
                                <br />
                                <br />
                                10년 만에 라스베이거스 스트립에 건설된 최초의 통합 리조트인 리조트 월드 라스베가스는
                                기술과
                                <br />
                                도시형 현대 리조트의 고풍스러운 매력을 지닌 인테리어와 함께 국제적인 리조트 월드
                                브랜드의 시설을 느껴보실수 있습니다.
                                </p>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
