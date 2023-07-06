// import { Component } from "react";
// import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import Image from "react-bootstrap/Image";
import React from "react";

function Blog() {
  const { id } = useParams();
  if (id === "1") {
    return (
      <div className="BlogContainer">
        <Container>
          <Row>
            <h1>What's in your toothpaste!?</h1>
          </Row>
          <br></br>
          <Row className="Blog">
            <Toothpaste />
          </Row>
        </Container>
      </div>
    );
  } else if (id === "2") {
    return (
      <div className="BlogContainer">
        <Container>
          <Row>
            <h1>Organic farming in India and why people rarely do it ?</h1>
          </Row>
          <br></br>
          <Row className="Blog">
            <Organic />
          </Row>
        </Container>
      </div>
    );
  } else if (id === "3") {
    return (
      <div className="BlogContainer">
        <Container>
          <Row>
            <h1>Wifi, 5G, 1Gbps !! But did you ever ask how safe ??</h1>
          </Row>
          <br></br>
          <Row className="Blog">
            <Radiation />
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="BlogContainer">
      <Container>
        <Row>
          <h1>something went wrong {":("}</h1>
        </Row>
      </Container>
    </div>
  );
}

function Toothpaste() {
  return (
    <div>
      <br></br>
      <br></br>
      <Image
        className=""
        src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c537f4d-8a47-489e-8d0b-e6384dc44f1d_3720x2470.jpeg"
      />
      <br></br>
      <br></br>
      <p>
        We use products for years only to find later they were dangerous. Many
        of our personal hygiene deodorants contain toxic aluminum mixed with
        other chemicals. We personally use other dangerous chemicals, including
        mercury dental fillers, fluoridated public water supplies, and
        fluoride-contaminated toothpaste. Fluoride is a waste produced from
        fertilizer and nuclear power plants. This dangerous chemical transforms
        into dangerous gasses and vapors directly into your air conditioning
        coolant systems circulating our inhaled air supply. For example, think
        about Freon gas for air conditioners and refrigerators. Although Freon
        isn’t used in newer car air conditioning systems, it’s still used to
        recharge older vehicle models and other appliances. All too frequently,
        we discover things that dangerously affect our health or damage our
        environment. One thing these toxic substances have in common is causing
        people bodily injury and harm. But now, in addition to fluoride, Colgate
        faces lawsuits from the proliferation of Triclosan into their oral
        hygiene products. Although its not just colgate, its many of your
        favourite brands which are intentionally pumping these ingredients into
        the products we use on a regular basis.
      </p>
      <hr></hr>
      <p>
        If you dont ask questions, your children have to bear the consequences!!
      </p>
      <br></br>
      <hr></hr>
      <p>
        Now its time for us to look at all the ingredients that are mentioned on
        the most famous brand. YOU KNOW WHAT IM TALKING ABOUT 🙃 COLGATE !!
      </p>
      <Image
        className=""
        src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9047767d-f6dc-4c73-816d-89c72b8ef663_1200x1600.jpeg"
      />
      <p>
        This is the image I took myself, I know it looks like shit, But Im sure
        it feels better after looking at the ingredients 🤢🤢 Lets start with
        the most common one in all of the famous toothpaste brands. FLOURIDE !!
        <br></br>
        <br></br>
        <h2>Flouride :</h2>
        Flouride is promoted in your tooth pastes because it provides protection
        from cavities, but too much of it can be deadly. And at this point we
        can be pretty sure that we are consuming too much flouride on a daily
        basis. Because its not just your tooth paste which contains flouride,
        but the water you drink is also flouridated. Too much intake of flouride
        can cause many diseases and ailments, for instance Excessive exposure
        can lead to tooth discoloration and bone problems. Skeletal fluorosis,
        or bone loss (from chronically excessive intakes) Higher levels of
        fluoride lead to low scores in IQ tests. Regular intake of fluoride may
        lead fluoroderma which results in acne and painful sores. As per
        research, there is a significant correlation between high blood pressure
        and water with too much fluoride. Consumption of too much of fluoride
        leads to yellowed or browned teeth. With regular brushing, it is easy to
        avoid and therefore does not poses any risk. AND MANY MORE AVOID
        FLOURIDE IN YOUR TOOTH PASTES AT ALL COSTS, OUR WATER ALREADY CONTAINS
        AMPLE AMOUNT OF IT.
        <br></br>
        <br></br>
        <h2>Titanium Dioxide(Tio2) :</h2>
        It is used as a colourant to whiten and brighten product formulations.
        Nano grade titanium dioxide is manufactured into very fine (nano)
        particles and is transparent and colourless. Research, published in the
        journal of GSC Biological and Pharmaceutical Sciences, depicted a
        positive correlation of toxicity to the HepG2 cell line (responsible for
        causing liver cancer). The results of this research concluded that at
        certain concentrations and durations of exposure, titanium dioxide
        nanoparticles, present in toothpaste, can be responsible for causing
        liver cancer. Remember you have been using these products for decades
        now, by which you can be pretty sure that you may have crossed the safe
        limit by now. However, regardless of a number of researches that prove
        Titanium dioxide can have adverse side effects, many companies, and
        health related websites claim that the titanium dioxide present in food
        and oral products, is present at levels that are considered “safe” for
        ingestion. It is imperative to note that even if the concentration of
        Titanium dioxide is minuscule, its continuous exposure over the course
        of longer periods of time can have damaging effects for both children
        and adults. TITANIUM DIOXIDE IS A CARCINOGEN. AVOID IT AT ALL COSTS.
        <br></br>
        <br></br>
        <h2>Sodium Saccharin :</h2>
        Saccharin is a non-nutritive or artificial sweetener. It’s made in a
        laboratory by oxidizing the chemicals o-toluene sulfonamide or phthalic
        anhydride. It looks like white, crystalline powder. Saccharin is
        commonly used as a sugar substitute because it doesn’t contain calories
        or carbs. Humans can’t break down saccharin, so it leaves your body
        unchanged. It’s around 300–400 times sweeter than regular sugar, so you
        only need a small amount to get a sweet taste. However, it can have an
        unpleasant, bitter aftertaste. This is why saccharin is often mixed with
        other low or zero-calorie sweeteners. However, this wasn’t always the
        case, as in the 1970s, several studies in rats linked saccharin to the
        development of bladder cancer. However, many experts feel observational
        studies are not sufficient to rule out that there’s no risk and still
        recommend that people avoid saccharin. As the saccharin is many times
        sweeter than sugar, there is a high chance that children would swallow
        the paste while brushing which is extreamly harmful with all these
        ingredients present in these toothpastes.
        <br></br>
        <br></br>
        <h2>Sodium Lauryl Sulfate(SLS) :</h2>
        Originally used to clean floors, sodium lauryl sulfate is a detergent
        known to cause microscopic tears in the mouth (which can lead to canker
        sores). It’s an ingredient that makes toothpaste foam; look for
        glycyrrhizin as a healthier alternative. We can go on and on with the
        ingredients, but this should give you a clear idea that we should avoid
        these toothpastes at all costs. There are several better alternatives to
        these tooth pastes in indian market, dont fall into the trap of
        marketing tricks like herbal, natural and all that stuff, always read
        the ingredients. I personally use Bentodent activated charcoal which is
        made of ingredients which are safe to our gums and our bodies. For more
        information regarding this please watch this Youtube video. Please do
        subscribe below for more articles like these where we expose all the bad
        deeds of the evil that is prevailing in our society. Thank You!!
      </p>
      <hr></hr>
      <p>
        ALWAYS LOOK INTO THE INGREDIENTS OF WHAT YOU ARE CONSUMING. DONT TRUST
        ANY BRAND OR ANYONE BLINDLY, NOT EVEN YOUR GOVERNMENT. DO YOUR OWN
        RESEARCH AND START THINKING CRITICALLY INSTEAD OF COMPLYING BLINDLY 🙏🏼🙏🏼
      </p>
      <hr></hr>
      <br></br>
      <br></br>
    </div>
  );
}

function Radiation() {
  return (
    <>
      <div className="available-content">
        <div className="body markup" dir="auto">
          <p />
          <div className="captioned-image-container">
            <figure>
              <a
                className="image-link is-viewable-img image2"
                target=""
                href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg"
                data-component-name="Image2ToDOM"
                rel="nofollow ugc noopener"
              >
                <div className="image2-inset">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 1456w"
                      sizes="100vw"
                    />
                    <img
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg"
                      width={678}
                      height={381}
                      data-attrs='{"src":"https://substack-post-media.s3.amazonaws.com/public/images/2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg","fullscreen":null,"imageSize":null,"height":381,"width":678,"resizeWidth":null,"bytes":52604,"alt":"","title":null,"type":"image/jpeg","href":null,"belowTheFold":false,"topImage":true,"internalRedirect":null}'
                      className="sizing-normal"
                      alt=""
                      title
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb783e5-2ac1-4c13-a986-6802118cecd2_678x381.jpeg 1456w"
                      sizes="100vw"
                      fetchpriority="high"
                    />
                  </picture>
                  <div className="image-link-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1={21} x2={14} y1={3} y2={10} />
                      <line x1={3} x2={10} y1={21} y2={14} />
                    </svg>
                  </div>
                </div>
              </a>
            </figure>
          </div>
          <div className="pullquote">
            <p>
              There is no safe amount of radiation. Even small amounts do harm.
            </p>
            <p>- Linus Pauling</p>
          </div>
          <p>
            <span>
              Our lifes are irrevercibly intertwined with technology for many
              decades now. First we started with wired technology and we slowly
              started moving towards wireless in the 90’s. But now most of it
              has become entirely wireless to cater for our needs of accessing
              high speed internet and having network coverage even in the remote
              parts of the world.
            </span>
            <strong>
              But have we ever for a second; stopped and asked what is this
              costing us ??
            </strong>
          </p>
          <p>
            <span>
              Sadly most of us didnt even bother to ask this question but
              ironically complained about the download or upload speeds not
              being up to the mark. Now we are even looking forward for a super
              fast internet,
            </span>
            <em>meaning 5G, 6G and more</em>
            <span>
              through which you can download a movie within seconds with the
              speeds yet to reach 1Gbps in the near future.
            </span>
            <strong>
              But did you ever care to study the technology in the first place
              ??
            </strong>
            <span>
              If you didnt; you landed at the right place. In this article lets
              first analyze the technology in the physics perspective and many
              of its effects in a biological perspective and further the
              precautions you could take to minimize the exposure to these
              wireless frequencies.
            </span>
          </p>
          <p />
          <h3 className="header-with-anchor-widget">
            How does wireless technology work ??
            <div
              id="§how-does-wireless-technology-work"
              className="header-anchor-widget offset-top"
            >
              <div className="header-anchor-widget-button-container">
                <div
                  className="header-anchor-widget-button"
                  href="https://invisibleenemy666.substack.com/i/127815293/how-does-wireless-technology-work"
                ></div>
              </div>
            </div>
          </h3>
          <div className="captioned-image-container">
            <figure>
              <a
                className="image-link is-viewable-img image2"
                target=""
                href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg"
                data-component-name="Image2ToDOM"
                rel="nofollow ugc noopener"
              >
                <div className="image2-inset">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 1456w"
                      sizes="100vw"
                    />
                    <img
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg"
                      width={1080}
                      height={1080}
                      data-attrs='{"src":"https://substack-post-media.s3.amazonaws.com/public/images/d6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg","fullscreen":null,"imageSize":null,"height":1080,"width":1080,"resizeWidth":null,"bytes":70582,"alt":null,"title":null,"type":"image/jpeg","href":null,"belowTheFold":false,"topImage":false,"internalRedirect":null}'
                      className="sizing-normal"
                      alt=""
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6446fa9-f7be-4cfc-ae63-844a630db936_1080x1080.jpeg 1456w"
                      sizes="100vw"
                    />
                  </picture>
                  <div className="image-link-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1={21} x2={14} y1={3} y2={10} />
                      <line x1={3} x2={10} y1={21} y2={14} />
                    </svg>
                  </div>
                </div>
              </a>
            </figure>
          </div>
          <ul>
            <li>
              <p>
                In the past when we used to have all our devices connected with
                wires the internet speeds were pretty fast, Thanks to fiber
                optics. All the data was transfered through wires and it was
                heavily secure than the current Wifi technology. In this
                scenario all your data would be encoded into 1’s and 0’s and
                will be sent over the wire in the form of electrical signals.
              </p>
            </li>
            <li>
              <p>
                <span>
                  When it comes to sending the data wirelessly in the air there
                  is no way but to rely on frequencies and electro magnetic
                  waves. We had this technology long ago when Marconi invented
                  the radio ( Which is debated as he used Tesla’s technology to
                  achieve this ). Radio uses radio waves to carry informtion
                  from one place to other but the problem is it cannot carry
                  more information at once as the frequency of radio waves is
                  very low (
                </span>
                <em>Radio waves fall under high wavelenght spectrum</em>
                <span>).</span>
              </p>
            </li>
            <li>
              <p>
                The ability of a wave to carry information depends upon the
                frequency of the waveform. The more the frequency or cycles per
                second the more the information it can carry. These wave forms
                of the wave mimic 1’s and 0’s of an electrical signal based on
                the aplitudes of the wave forms. So more the frequency more the
                waveforms and proportionally the 1’s and 0’s. These are the
                basic fundamentals of a wireless technology. Enough of science
                !! Lets get to the actual discussion.
              </p>
            </li>
          </ul>
          <p>
            <span>
              This is all fun, as we are currently enjoying all the fruits of
              man’s endeavour towards more advanced technology which has brought
              us immense comforts in our daily lives.
            </span>
            <em>
              <strong>But it is time</strong>
            </em>
            <span>
              we start noticing the downsides of these advancements. As we have
              discussed above we are moving towards higher and higher frequency
              bands in order to achieve high data throughput. For instance the
              frequencies of radio transmission is around 100MHz, where as the
              frequency used by the current 5G networks has a upper limit around
              50GHz which is almost about 500 times more cycles per waveform.
              The higher ranges will reach 300GHz in the near future as the
              world demands for self driving cars, augmented reality and more.
              Where as 4G spectrum is between 600Mhz and 2.5GHz. The 5G and 4G
              spectrums fall under the range of microwaves(
            </span>
            <em>300MHz to 300GHz</em>
            <span>
              ); Yes the same microwave frequencies are also used to cook your
              food in a microwave oven. Most of the Microwave ovens we use at
              our home have something called magnetrons which emit microwaves at
              2.45 GHz. For more details
            </span>
            <a
              href="http://www.sfu.ca/phys/346/121/resources/physics_of_microwave_ovens.pdf"
              rel="nofollow ugc noopener"
            >
              read here
            </a>
            <span>.</span>
            <em>
              <strong>Are you getting it yet ??</strong>
            </em>
          </p>
          <h3 className="header-with-anchor-widget">
            We are being bombarded with these dangerous frequencies on a daily
            basis !!
            <div
              id="§we-are-being-bombarded-with-these-dangerous-frequencies-on-a-daily-basis"
              className="header-anchor-widget offset-top"
            >
              <div className="header-anchor-widget-button-container">
                <div
                  className="header-anchor-widget-button"
                  href="https://invisibleenemy666.substack.com/i/127815293/we-are-being-bombarded-with-these-dangerous-frequencies-on-a-daily-basis"
                ></div>
              </div>
            </div>
          </h3>
          <div className="captioned-image-container">
            <figure>
              <a
                className="image-link is-viewable-img image2"
                target=""
                href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg"
                data-component-name="Image2ToDOM"
                rel="nofollow ugc noopener"
              >
                <div className="image2-inset">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 1456w"
                      sizes="100vw"
                    />
                    <img
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg"
                      width={1280}
                      height={959}
                      data-attrs='{"src":"https://substack-post-media.s3.amazonaws.com/public/images/aa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg","fullscreen":null,"imageSize":null,"height":959,"width":1280,"resizeWidth":null,"bytes":101734,"alt":null,"title":null,"type":"image/jpeg","href":null,"belowTheFold":true,"topImage":false,"internalRedirect":null}'
                      className="sizing-normal"
                      alt=""
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa93fb5d-4cf6-4b39-91c8-49dea0e80b69_1280x959.jpeg 1456w"
                      sizes="100vw"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-link-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1={21} x2={14} y1={3} y2={10} />
                      <line x1={3} x2={10} y1={21} y2={14} />
                    </svg>
                  </div>
                </div>
              </a>
            </figure>
          </div>
          <p />
          <ul>
            <li>
              <p>
                You may wonder how the microwave oven cooks the food. Its
                simple, the microwaves which are being emited by these
                magnetrons are absorbed by the water molecules present in the
                food allowing them to vibrate and there by increasing the heat
                that is required to cook the food. And the fun fact is your body
                is 72% water and you still think wifi and 5G is safe !!
              </p>
            </li>
            <li>
              <p>
                The Electromagnetic waves of 4G and 5G spectrum can even
                penetrate you body as their wavelengths are in the range of
                milli meters especially 5G and thus are called as milli meter
                waves. And as we progress towards 6G which most countries
                including india are already planing to achieve by 2030 the
                wavelengths may even reach an atomic level which have the
                capabilities to completely destroy your DNA.
              </p>
            </li>
            <li>
              <p>
                High frequency microwaves are also used as weapons to take down
                enemy drones and destroy electronic equipments and soldiers are
                especially warned about the presence of microwaves during
                military operations.
              </p>
            </li>
            <li>
              <p>
                <span>
                  The regulations regarding the frequencies that should be
                  allowed are decades old which are mostly based around just the
                  heat or raise in temperature of the tissue during the period
                  of exposure. If you still think government will take care of
                  this for you;
                </span>
                <em>GOOD LUCK ON THAT !!</em>
                <span />
              </p>
            </li>
            <li>
              <p>
                The sad thing is the effects of being exposed to these
                frequencies is a slow poison. Until you realise the damage that
                has been done at the cellular level it would be too late !!
              </p>
            </li>
          </ul>
          <h3 className="header-with-anchor-widget">
            Fatal consequences of being exposed to electromagnetic frequencies
            !!
            <div
              id="§fatal-consequences-of-being-exposed-to-electromagnetic-frequencies"
              className="header-anchor-widget offset-top"
            >
              <div className="header-anchor-widget-button-container">
                <div
                  className="header-anchor-widget-button"
                  href="https://invisibleenemy666.substack.com/i/127815293/fatal-consequences-of-being-exposed-to-electromagnetic-frequencies"
                ></div>
              </div>
            </div>
          </h3>
          <p>
            Many recent studies point to radio frequency electromagnetic fields
            (RF-EMF) causing oxidative stress in the human beings. Lets
            understand what is oxidative stress.
          </p>
          <ul>
            <li>
              <p>
                Our body uses oxygen for metabolism and as a result the food we
                consume is broken down using oxygen and is turned into energy
                which we need to survive and thrive.
              </p>
            </li>
            <li>
              <p>
                <span>
                  During this process highly reactive free radicals are
                  produced, which are known as ROS (
                </span>
                <em>Oxygen reactive species</em>
                <span>
                  ), these are the free radicals such as hydroxyl radicals,
                  hydrogen peroxide and singlet oxygen. When in balanced amounts
                  these free radicals are used by the body as a defence
                  mechanism to eliminate foreign bodies such as pathogens. At
                  these amounts body has natural mechanisms to detoxify these
                  free radicals.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  These free radicals are generated in the body through the
                  natural processes like metabolism. But when these free
                  radicals are being generated by some external stressors such
                  as UV, ionizing radiations, pollutants, heavy metals and many
                  others there is an imbalance which is created between
                  production and accumilation of these Oxygen reactive species(
                </span>
                <em>ROS</em>
                <span>
                  ); there by resulting in a plethora of diseases and fatal
                  consequences.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>This imbalance is what we call as</span>
                <em>“Oxidative Stress”.</em>
                <span>
                  This can result in the damage of soft tissues in the body and
                  particularly brain is the most affected part.
                </span>
              </p>
            </li>
            <li>
              <p>
                Cells deploy an antioxidant defensive system based mainly on
                enzymatic components, such as superoxide dismutase (SOD),
                catalase (CAT), and glutathione peroxidase (GPx), to protect
                themselves from ROS-induced cellular damage. But they are only
                designed to fight these off in controllable amounts. If the
                production of these radicals crosses this threshold it leads to
                damage at the cellular level.
              </p>
            </li>
            <li>
              <p>
                <span>
                  The radiations from our wifi routers, mobile phones, laptops
                  are categorized as Non-ionizing radiations meaning these
                  radiations do not have the capability nad energy to dislodge
                  electrons and molecules from the tissues. Where as Ionizing
                  radiation can lead directly to cancer and DNA damage. There is
                  an ongoing debate about Non-Ionizing radiation being safe
                  which is debunked
                </span>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0269749116309526"
                  rel="nofollow ugc noopener"
                >
                  here
                </a>
                <span>.</span>
              </p>
            </li>
            <li>
              <p>
                But on contrary Non-ionizing radiations disturb the oxidation
                mechanism in the body at the cellular level and can lead to
                oxidative stress and in turn resulting in excessive amounts of
                free radicals in the body.
              </p>
            </li>
            <li>
              <p>
                <span>
                  Oxidative stress leads to all kinds of illnesses and fatal
                  consequences including Leukemia, brain tumors, cancer and DNA
                  damage.
                </span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5551541/"
                  rel="nofollow ugc noopener"
                >
                  This article
                </a>
                <span>goes through it in detail.</span>
              </p>
            </li>
          </ul>
          <h3 className="header-with-anchor-widget">
            Here are a list of chronic illnessess and fatal effects of
            radiations from ongoing research in this field :
            <div
              id="§here-are-a-list-of-chronic-illnessess-and-fatal-effects-of-radiations-from-ongoing-research-in-this-field"
              className="header-anchor-widget offset-top"
            >
              <div className="header-anchor-widget-button-container">
                <div
                  className="header-anchor-widget-button"
                  href="https://invisibleenemy666.substack.com/i/127815293/here-are-a-list-of-chronic-illnessess-and-fatal-effects-of-radiations-from-ongoing-research-in-this-field"
                ></div>
              </div>
            </div>
          </h3>
          <ul>
            <li>
              <p>
                Learning, concentration, and behavioral disorders (e.g.
                attention deficit disorder, ADD)
              </p>
            </li>
            <li>
              <p>
                Extreme fluctuations in blood pressure, ever harder to influence
                with medications
              </p>
            </li>
            <li>
              <p>Heart rhythm disorders</p>
            </li>
            <li>
              <p>
                Heart attacks and strokes among an increasingly younger
                population
              </p>
            </li>
            <li>
              <p>Brain-degenerative diseases (e.g. Alzheimer's) and epilepsy</p>
            </li>
            <li>
              <p>Cancerous afflictions: leukemia, brain tumors</p>
            </li>
            <li>
              <p>Headaches, migraines</p>
            </li>
            <li>
              <p>Chronic exhaustion</p>
            </li>
            <li>
              <p>Inner agitation Sleeplessness, daytime&nbsp;sleepiness</p>
            </li>
            <li>
              <p>Tinnitus</p>
            </li>
            <li>
              <p>Susceptibility to infection</p>
            </li>
            <li>
              <p>
                Nervous and connective tissue pains, for which the usual causes
                do not explain even the most conspicuous symptoms.
              </p>
            </li>
          </ul>
          <h3 className="header-with-anchor-widget">
            Here are somethings we can do to safegaurd our self from this
            situation we have been put into !!
            <div
              id="§here-are-somethings-we-can-do-to-safegaurd-our-self-from-this-situation-we-have-been-put-into"
              className="header-anchor-widget offset-top"
            >
              <div className="header-anchor-widget-button-container">
                <div
                  className="header-anchor-widget-button"
                  href="https://invisibleenemy666.substack.com/i/127815293/here-are-somethings-we-can-do-to-safegaurd-our-self-from-this-situation-we-have-been-put-into"
                ></div>
              </div>
            </div>
          </h3>
          <p>
            Leading an urban life there is no way you can completely escape from
            being exposed to these radiations. But there are ways you can
            minimize the exposure. Here are a few things I suggest you do and
            which most of them I personally practice.
          </p>
          <ul>
            <li>
              <p>
                Switch to wired technology. Instead of using wifi at home, use a
                LAN wire to access internet and use mobile data on your phone.
                If you already have a router at home purchase a LAN wire and
                plug it to the router and in the router settings turn off the
                wifi. You get additional benefits such as exceptional speeds and
                better security with wired technology.
              </p>
            </li>
            <li>
              <p>
                When you put your mobile phone in the pocket, make sure it is in
                aeroplane mode. Because radiation from mobile phones are
                exceptionally higher than that of wifi especially while you are
                on a call. When on a call try to use wired headphones or use the
                mobile speaker. Avoid putting your phone to the ear because it
                is the closest to the brain you can get and brain contains lots
                of soft tissues.
              </p>
            </li>
            <li>
              <p>
                <span>
                  If possible purchase an EMF meter and try to measure the
                  radiations in parts of your home. Make sure you sleep in the
                  place where there is minimum amount of radiation.
                </span>
                <a
                  href="https://www.amazon.in/TriField-EMF-Meter-Model-TF2/dp/B078T2R64C/ref=sr_1_34?adgrpid=60421578873&ext_vrnc=hi&hvadid=590842871010&hvdev=c&hvlocphy=9062140&hvnetw=g&hvqmt=e&hvrand=13440568238362171690&hvtargid=kwd-660747954158&hydadcr=22790_2210552&keywords=emf+meter+radiation&qid=1687076081&sr=8-34"
                  rel="nofollow ugc noopener"
                >
                  Here is the best one in the market
                </a>
                <span>.</span>
              </p>
            </li>
            <li>
              <p>
                Turn off your wifi at night and put your phone in the other room
                or some where far from your body. Because the strength of an
                electro magnectic field decreases exponentially with distance.
              </p>
            </li>
            <li>
              <p>
                Keep your kids out of reach from these technologies until they
                are fully grown, because these radiations tend to show fatal and
                immediate effects on growing children rather than the adults.
              </p>
            </li>
            <li>
              <p>
                Consider using EMF shields if the radiations near your home are
                very high, which might be because of the cell phone masts
                installed near your home. Even the power lines which carry
                electricity to our homes create high intensity magnetic fields.
                Try to distance from these power lines as much as possible.
              </p>
            </li>
            <li>
              <p>
                <span>
                  Opt out of 5G and spread the word in your community,
                </span>
                <a
                  href="https://www.gaia.com/article/5g-health-risks-the-war-between-technology-and-human-beings"
                  rel="nofollow ugc noopener"
                >
                  as this article says
                </a>
                <span>
                  we are rapidly trying to build an infrastrructure which
                  simulates a
                </span>
                <em>
                  <strong>Global Mircowave Oven</strong>
                  <span>.</span>
                </em>
              </p>
            </li>
            <li>
              <p>
                Many cell phone masts are disguised as chimneys, trees or will
                be covered by a cylindrical sheet to avoid getting noticied. Be
                cautious and avoid spending time near these places at all costs.
                The best way to check for any hidden cell phone masts is with an
                EMF meter.
              </p>
            </li>
            <li>
              <p>
                <span>
                  Consider buying a EMF shield curtain or paint the room on the
                  side where your house receives most radiation with EMF
                  shielding paints. There are many types of shields available on
                  the market
                </span>
                <a
                  href="https://hollandshielding.com/EMI-shielding-curtains?gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K2ogrIKniKY8jyAPF7-_yZ3X3gOp9ZzvYR5nqqxRznODo9Nm47Ze_0aAlXGEALw_wcB"
                  rel="nofollow ugc noopener"
                >
                  like these curtains that can be installed for doors and
                  windows.
                </a>
              </p>
            </li>
            <li>
              <p>
                Include anti-oxident rich foods as a part of your diet, which
                may help in removing the excess free radicals from your body.
              </p>
            </li>
          </ul>
          <p>
            <span>
              We are being forced to comply blindly to the advancement in
              technologies as they provide us comfort and make our lives easy.
              But dont be fooled. These technologies have not been tested
            </span>
            <em>“Not Fatal”</em>
            <span>
              rather there are increasing number of studies showing detrimental
              effects caused by these radiations.
            </span>
            <em>
              <strong>
                Dont let anyone tell you that you are just paranoid, these are
                the people who blindly comply with almost anything. Show them
                your research. Protection from these radiations is a life
                necessity, not an option.
              </strong>
            </em>
          </p>
          <div className="pullquote">
            <p>
              The modern human lives in a cesspool of man made electro magnetic
              radiation.
            </p>
            <p>- Steven Magee</p>
          </div>
          <p>
            <span>
              It is our sole responsibility to protect ourselves, our family and
              kids from these dangerous radiation which we are being exposed to
              every where on a daily basis. To end with
            </span>
            <a
              href="https://www.youtube.com/watch?v=F0NEaPTu9oI&ab_channel=TEDxTalks"
              rel="nofollow ugc noopener"
            >
              please watch this video
            </a>
            <span>
              for a better understanding of this situation. I will be writing a
              series of indepth articles pertaining this topic with more indepth
              understanding of these radiations and biological impacts on human
              beings. In this article we have barely scratched the surface.
              Please do subscribe for more in-depth articles like this and
              support my work 🙏🏼🙏🏼
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

function Organic() {
  return (
    <div className>
      <div className="available-content">
        <div className="body markup" dir="auto">
          <div className="pullquote">
            <p>
              Globalisation is nothing but organised greed celebrated as the
              only way to be. It is time to return to understand the true
              meaning of economy and ecology, we destroy in the name of feeding
              the world. But is the world being fed ?? A billion people still go
              hungry.
            </p>
            <p>- Vandana shiva </p>
          </div>
          <p>
            Before we even start understanding this, lets go back in history and
            find out what really brought us here. India being global
            agricultural powerhouse of the world as it has been for centuries;
            What really changed the ways of agriculture which people used to do
            for centuries without any synthetic pesticides or fertilizers ?? To
            find this out we have to understand the “Green Revolution” which is
            an agriculture movement started in india in the 60’s with its main
            agenda being able to increase the yeild of mainly rice and wheat
            including other crops in order to alleviate hunger and poverty. Lets
            understand how it was acheived and lets also understand how it has
            caused more harm than good.{" "}
          </p>
          <div className="captioned-image-container">
            <figure>
              <a
                className="image-link is-viewable-img image2"
                target=""
                href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg"
                data-component-name="Image2ToDOM"
                rel="nofollow ugc noopener"
              >
                <div className="image2-inset">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 1456w"
                      sizes="100vw"
                    />
                    <img
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg"
                      width={1024}
                      height={575}
                      data-attrs='{"src":"https://substack-post-media.s3.amazonaws.com/public/images/1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg","fullscreen":null,"imageSize":null,"height":575,"width":1024,"resizeWidth":null,"bytes":193378,"alt":null,"title":null,"type":"image/jpeg","href":null,"belowTheFold":false,"topImage":true,"internalRedirect":null}'
                      className="sizing-normal"
                      alt=""
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a08683e-97be-4da3-8469-60650e04389c_1024x575.jpeg 1456w"
                      sizes="100vw"
                      fetchpriority="high"
                    />
                  </picture>
                  <div className="image-link-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1={21} x2={14} y1={3} y2={10} />
                      <line x1={3} x2={10} y1={21} y2={14} />
                    </svg>
                  </div>
                </div>
              </a>
            </figure>
          </div>
          <h4 className="header-with-anchor-widget">
            <strong>Pre Green Revolution : </strong>
          </h4>
          <p>
            In the past, Indian farms had small plots of land protected by
            windbreaks and tree cover. For centuries, the farmers employed
            several methods of organic husbandry, crop rotation, and leaving
            fields fallow for long periods of time in order to allow the soil to
            retain its nutrients. These practices lowered the demand on the land
            and maintained the equilibrium of soil.
          </p>
          <p>
            Pre green revolution (Before 60’s) is the period of time before the
            green revolution started in india. This was a time where india was
            facing a series of severe famines due to the economic instability,
            grain exploitation due to the british raj. For example :
          </p>
          <ul>
            <li>
              <p>
                <span>
                  In 1943, India suffered from the world’s worst recorded food
                  crisis;{" "}
                </span>
                <strong>the Bengal Famine,</strong>
                <span>
                  {" "}
                  which led to the death of approximately 4 million people in
                  eastern India due to hunger.
                </span>
              </p>
            </li>
          </ul>
          <p>
            <span>
              This was a period where india was still recovering after
              independence. This led to farmers looking for various ways and
              methods to increase the yield of the crops inorder to feed the
              growing population, as the natural farming methods did not yield
              as much crop required. This is where the “Green Revolution” made
              an entry. It was mostly publically funded (
            </span>
            <em>by India Government</em>
            <span>) and was was mainly led by</span>
            <strong> M.S. Swaminathan. </strong>
            <span>
              It was also funded by the Ford and Rockefeller Foundation.{" "}
            </span>
          </p>
          <p></p>
          <h4 className="header-with-anchor-widget">
            <strong>Green Revolution : </strong>
          </h4>
          <p>
            <span>
              Green revolution was all about industrialization of the
              agriculture. The main objective of this revolution was to increase
              the yield of the crop which can cater to the growing population at
              that time. This is the begining of the introduction of High Yield
              Variety(
            </span>
            <em>HYV</em>
            <span>
              ) seeds mainly of rice and wheat. These seeds are designed in such
              a way that they react very well to synthetic pesticides and
              fertilizers. Thus as a result green revolution has also introduced
              the use of synthetic pesticides and fertilizers which has
              increased the yield of the crops in the following years. For
              instance{" "}
            </span>
          </p>
          <ul>
            <li>
              <p>
                By 1970, Punjab was producing 70% of the country's total food
                grains and farmers' incomes were increasing by over 70%. As
                Punjab is the place where Green revolution was mainly focused
                and heavily adopted, due to the better irrigation system and
                abundant availability of water.
              </p>
            </li>
          </ul>
          <p>
            Punjab's prosperity following the Green Revolution became a model to
            which other states aspired to reach.{" "}
          </p>
          <p>
            Though the high-yielding monohybrid crops were introduced as a part
            of Green Revolution, the major problem with indigenous seeds was not
            the fact that they were not high yielding, but their inherent
            inability to withstand the chemical fertilizers used. On the
            contrary, new varieties were created to produce higher yields in
            conjunction with the use of chemical fertilizers and very intense
            irrigation.
          </p>
          <p>
            <span>
              {" "}
              Places like India and China that once feared famine have not
              experienced it since implementing the use of IR8 rice (
            </span>
            <em>
              IR8 is a high-yielding semi-dwarf rice variety developed by the
              International Rice Research Institute in the early 1960s
            </em>
            <span>
              ) and other food varieties. Before the Green Revolution,
              agriculture was severely limited to areas with a significant
              amount of rainfall, but by using irrigation, water can be stored
              and sent to drier areas, putting more land into agricultural
              production - thus increasing nationwide crop yields. The Green
              Revolution in India is largely the Wheat Revolution as the wheat
              production increased by more than three times between 1967-68 and
              2003-04, while the overall increase in the production of cereals
              was only two times.
            </span>
          </p>
          <p />
          <h4 className="header-with-anchor-widget">
            Post Green Revolution :{" "}
          </h4>
          <p>
            <span>The post green revolution era is a period when </span>
            <strong>
              Indian Agriculture was converted into an industrial system
            </strong>
            <span> due to the</span>
            <strong> adoption of modern methods and technology</strong>
            <span>
              {" "}
              such as the use of HYV seeds, tractors, irrigation facilities,
              pesticides and fertilizers. The use of pesticides really took off
              as the yeilds were very lucrative for the farmers. For instance
              lets look at the pesticide consumption in India over the decades
              through the period of green revolution. Below graph represents the
              usage of the pesticides in India over this period.
            </span>
          </p>
          <div className="captioned-image-container">
            <figure>
              <a
                className="image-link is-viewable-img image2"
                target=""
                href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png"
                data-component-name="Image2ToDOM"
                rel="nofollow ugc noopener"
              >
                <div className="image2-inset">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 1456w"
                      sizes="100vw"
                    />
                    <img
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png"
                      width={1414}
                      height={676}
                      data-attrs='{"src":"https://substack-post-media.s3.amazonaws.com/public/images/56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png","fullscreen":null,"imageSize":null,"height":676,"width":1414,"resizeWidth":null,"bytes":577635,"alt":null,"title":null,"type":"image/png","href":null,"belowTheFold":true,"topImage":false,"internalRedirect":null}'
                      className="sizing-normal"
                      alt=""
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56476ab9-b3cc-4f0e-93b6-be1b6f96f984_1414x676.png 1456w"
                      sizes="100vw"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-link-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1={21} x2={14} y1={3} y2={10} />
                      <line x1={3} x2={10} y1={21} y2={14} />
                    </svg>
                  </div>
                </div>
              </a>
            </figure>
          </div>
          <p>
            <span>Source: </span>
            <a
              href="http://www.fao.org/faostat/en/ #data/RP"
              rel="nofollow ugc noopener"
            >
              http://www.fao.org/faostat/en/ #data/RP
            </a>
          </p>
          <p>
            In India, there has been consistent rise from 5,000 metric tonnes in
            1958 to 102,240 metre tonnes in 1998 in the manufacturing of
            technical grade pesticides. According to the graph, pesticide usage
            in India has surged hundreds of times over the previous seven
            decades, from 154 MT in 1953-54 to 57,000 MT in 2016- 17. Due to a
            prohibition or limit on using organochlorine pesticides, including
            HCH (BHC), DDTaldrin etc, and the decrease was recorded between 2000
            and 2010.{" "}
          </p>
          <p>
            Below is the statewise pesticide usage in the year 2020-2021 in
            India in metric tonnes with Maharashtra and Uttar Pradesh topping
            the charts.
          </p>
          <div className="captioned-image-container">
            <figure>
              <a
                className="image-link is-viewable-img image2"
                target=""
                href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png"
                data-component-name="Image2ToDOM"
                rel="nofollow ugc noopener"
              >
                <div className="image2-inset">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 1456w"
                      sizes="100vw"
                    />
                    <img
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png"
                      width={850}
                      height={602}
                      data-attrs='{"src":"https://substack-post-media.s3.amazonaws.com/public/images/f264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png","fullscreen":null,"imageSize":null,"height":602,"width":850,"resizeWidth":null,"bytes":71059,"alt":null,"title":null,"type":"image/png","href":null,"belowTheFold":true,"topImage":false,"internalRedirect":null}'
                      className="sizing-normal"
                      alt=""
                      srcSet="https://substackcdn.com/image/fetch/w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 424w, https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 848w, https://substackcdn.com/image/fetch/w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 1272w, https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff264d1f5-c19d-4a2f-b0da-098cb495fa90_850x602.png 1456w"
                      sizes="100vw"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-link-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1={21} x2={14} y1={3} y2={10} />
                      <line x1={3} x2={10} y1={21} y2={14} />
                    </svg>
                  </div>
                </div>
              </a>
            </figure>
          </div>
          <p>
            <span>
              This is why I say green revolution has done more harm to the
              agriculture than the good it has bestowed upon the Indian
              agriculture. No question green revolution has done pretty well in
              bringing irrigation to the places which didnt had enough water and
              rainfall,{" "}
            </span>
            <strong>BUT AT WHAT COST ??</strong>
          </p>
          <div className="pullquote">
            <p>
              The final principle of natural farming is NO PESTICIDES, Nature is
              in perfect balance when left alone.
            </p>
            <p> - Masanobu fukuoka</p>
          </div>
          <p>
            According to the manufacturers, the pesticide market in India is
            worth over Rs 40,000 crores. Farmers are habituated to use
            pesticides without looking at &nbsp;the long-term impact. Sometimes,
            they lose their life while spraying dangerous chemicals on the crop.
            Many of the pesticides which are originally banned in india and
            other countries around the globe are still being used by the farmers
            even to this day.{" "}
          </p>
          <p>
            This way the “Green Revolution” introduced many poisonous and
            dangerous pesticides in india order to increase the yields and with
            that came a bunch of disasterous consequences. For instance,{" "}
          </p>
          <ul>
            <li>
              <p>
                The productivity of the crops was increased by the use of
                fertilizers, pesticides, and groundwater resources. However,
                mismanagement and overuse of chemical fertilizers, pesticide,
                and lack of crop rotation caused the land to become infertile,
                and loss of groundwater became a common occurrence in
                agricultural areas. These impacts made the farmers even more
                miserable, due to the increased expenditure spend on the
                cultivation of crops to overcome these shortcomings.
              </p>
            </li>
            <li>
              <p>
                A number of traditional rice varieties consumed prior to the
                Green Revolution have become non-existent, and the availability
                of local rice varieties have decreased to 7000 and not all of
                these varieties are under cultivation. Thus, India has lost more
                than 1&nbsp;lakh varieties of indigenous rice after the 1970s
                that took several thousand years to evolve. This loss of species
                is mainly due to the focus given to the production of subsidized
                high-yielding hybrid crops and the emphasis of monoculture by
                the government.
              </p>
            </li>
            <li>
              <p>
                Further, heavy dependence on few major crops has led
                to&nbsp;loss of bio-diversity&nbsp;of farmers, and the increase
                of&nbsp;stubble burning&nbsp;cases since 1980. These problems
                were aggravated due to absence of training to use modern
                technology and vast illiteracy leading to excessive use of
                chemicals.
              </p>
            </li>
          </ul>
          <p>
            <strong>
              There were also major ecological and societal impacts of the Green
              Revolution :
            </strong>
            <span></span>
          </p>
          <ul>
            <li>
              <p>Loss of landraces that were indigenous to our country.</p>
            </li>
            <li>
              <p>The loss of soil nutrients making it unproductive.</p>
            </li>
            <li>
              <p>
                excessive use of pesticides increases the presence of its
                residues in foods and environment.
              </p>
            </li>
            <li>
              <p>
                The farmers shift to unsustainable practices to obtain more
                yield.
              </p>
            </li>
            <li>
              <p>Increased rates of suicide among farmers.</p>
            </li>
            <li>
              <p>
                Unable to withstand the increasing expenses for farming and
                debts small farmers sold their lands to large commercial
                farmers.
              </p>
            </li>
            <li>
              <p>
                Unable to withstand the food inflation and economic crisis the
                farmers left farming resorting to other occupation.
              </p>
            </li>
          </ul>
          <h4 className="header-with-anchor-widget">Conclusion : </h4>
          <p>
            <span>
              Pesticides are extremly dangerous to humans, animals and
              environment although some may be considered NOT HAZARDOUS, but
              pesticides are also potentially toxic to humans. They may induce
              adverse health effects including cancer, effects on reproduction,
              immune or nervous systems and there is an urgent need to shift to
              consume food grown using organic and natual farming methods. We
              have personally enqired farmers around the city of{" "}
            </span>
            <strong>hyderabad</strong>
            <span>
              {" "}
              about their resistance to organic farming practices. We found only
              two main reasons the farmers explained
            </span>
          </p>
          <ol>
            <li>
              <p>
                They dont want risk loosing their high yields, as instantly
                turning to organic farming will be hard for a few years because
                the soil would have lost all its fertility and essential
                nutrients due to excessive use of synthetic pesticides and hence
                yields will be less till the soil recovers completely.
              </p>
            </li>
            <li>
              <p>
                Pesticides provide a cheap alternative rather than paying the
                agricultural labor for eliminating weeds and looking after the
                crops.
              </p>
              <p />
            </li>
          </ol>
          <blockquote>
            <p>
              <em>
                Lastly before you think you are eating healthy, you may have to
                think twice. You are being poisoned at an atomic level without
                you even noticing.
              </em>
            </p>
          </blockquote>
          <p>
            <span>
              But who has really benefitted from so called “Green Revolution”
              are the companies which sell these pesticides around the globe
              like{" "}
            </span>
            <a
              href="https://en.wikipedia.org/wiki/Monsanto"
              rel="nofollow ugc noopener"
            >
              Monsanto
            </a>
            <span>, </span>
            <a
              href="https://en.wikipedia.org/wiki/Bayer"
              rel="nofollow ugc noopener"
            >
              Bayer
            </a>
            <span>
              {" "}
              and these evil organisations also promote GMO(Genetically Modified
              Organisms) seeds which may cause some common toxic effects such as
              hepatic, pancreatic, renal, or reproductive effects and may alter
              the hematological, biochemical, and immunologic parameters; and
              they make humongous profits from these practices.
            </span>
          </p>
          <p>
            We are determined to find the solutions and research economically
            viable ways for a farmer to convert to organic farming with minimal
            risk and inspire you guys to make a transition to an healthy and
            organic lifestyle.
          </p>
          <p>
            <em></em>
            <span>
              Hope you liked this article, Please do subscribe for more
              interesting articles like this which may give you a better
              perspective of what is really happening around the world 🙏🏼🙏🏼.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
