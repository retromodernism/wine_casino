import { useMediaQuery } from "react-responsive";
import s from "./index.module.scss";
import image from "./src/image.png";

const About = (props) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <section className={s.about}>
      <div className={s._bg1}></div>
      <div className={s._content}>
        <div className={s._title}>О винном фан-казино</div>
        <div className={s._description}>
          <div className={s._descriptionItem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu turpis
            amet, eu tincidunt purus, arcu. Tellus eget dui eget lorem. Nunc
            cras nulla viverra pulvinar. Mauris purus, lobortis nulla tortor dis
            platea. Erat nibh amet, dictum a, amet at interdum integer. Arcu
            pulvinar parturient porttitor scelerisque in sit ut ultricies.
            Accumsan, sed consectetur aliquam donec. Platea eu odio tincidunt
            auctor sed. Viverra at et velit lacus facilisis est amet, lacus.
            Erat eleifend at faucibus nisl purus enim pulvinar. Ultrices
            fringilla risus sodales dignissim tristique venenatis nulla aenean
            tortor. Amet, orci gravida fermentum, morbi iaculis dui laoreet.
            Dictum id nulla imperdiet purus pellentesque etiam et habitant
            viverra. Donec arcu sagittis ipsum nulla. Tempus dolor eu consequat
            elit ut diam hendrerit enim odio. Auctor sed volutpat morbi ut
            tristique netus.
          </div>
          <div
            className={s._descriptionItem}
            style={{
              background: `url(${image}) 100% 100% / cover no-repeat`,
              height: isTablet ? "471px" : "auto",
            }}
          ></div>
          <div className={s._descriptionItem}>
            <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={s._descriptionItem}>
            <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={s._descriptionItem} style={{ gridColumn: "1/-1" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu turpis
            amet, eu tincidunt purus, arcu. Tellus eget dui eget lorem. Nunc
            cras nulla viverra pulvinar. Mauris purus, lobortis nulla tortor dis
            platea. Erat nibh amet, dictum a, amet at interdum integer. Arcu
            pulvinar parturient porttitor scelerisque in sit ut ultricies.
            Accumsan, sed consectetur aliquam donec. Platea eu odio tincidunt
            auctor sed. Viverra at et velit lacus facilisis est amet, lacus.
            Erat eleifend at faucibus nisl purus enim pulvinar. Ultrices
            fringilla risus sodales dignissim tristique venenatis nulla aenean
            tortor. Amet, orci gravida fermentum, morbi iaculis dui laoreet.
            Dictum id nulla imperdiet purus pellentesque etiam et habitant
            viverra.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
