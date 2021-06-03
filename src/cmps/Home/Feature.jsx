import { useInView } from "react-intersection-observer";

export  function Feature({children}) {
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: false,
        threshold: 0
      });
    return (
        <div ref={ref} className={`feature-container flex ${(inView)? 'in-view':'out-view'}`} >
          {children}
       </div>
    )
}

