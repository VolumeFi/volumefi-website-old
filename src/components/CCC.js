import React from "react"
import Marquee from "react-fast-marquee"

import imgMask4 from "@images/mask-4.png"
import imgMask5 from "@images/mask-5.png"

import imgFigment from "@images/ccc/figment.png"
import imgKallisto from "@images/ccc/kallisto.png"
import imgVolume from "@images/ccc/volume.png"
import imgPaloma from "@images/ccc/paloma.png"
import imgUmee from "@images/ccc/umee.png"
import imgStrangelove from "@images/ccc/strangelove.png"
import imgCoindesk from "@images/ccc/coindesk.png"
import imgQuicknode from "@images/ccc/quicknode.png"
import imgSimpleVC from "@images/ccc/simplevc.png"
import imgEvmos from "@images/ccc/evmos.png"
import imgCoinfx from "@images/ccc/coinfx.png"
import imgKadena from "@images/ccc/kadena.png"
import imgPhlipIo from "@images/ccc/phlip-io.png"

import { pillars } from "../helpers/data"

const CCC = () => (
  <div className="page-container page-ccc">
    <div className="section section-black section-column page-ccc-top">
      <div
        className="page-ccc-title-wrapper"
        style={{
          backgroundImage: `url(${imgMask4})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "20px top",
          backgroundSize: "contain",
        }}
      >
        <div className="page-ccc-title">
          <h1>
            THE CROSS <br />
            CHAIN
            <br />
            COALITION
          </h1>
        </div>
      </div>
      <div className="page-ccc-description">
        <div className="page-ccc-description-left">
          <p>
            Moving developers forward to <br />
            innovate for a cross chain world
          </p>
          <a
            href="https://docs.google.com/forms/d/1fr6EHck8hY8z4RgAlCdRbrqWFdVz-8a6C_YNWSLMTWs/edit"
            target="_blank"
            className="ccc-join-community"
          >
            Join the Community
          </a>
        </div>
        <div className="page-ccc-description-right">
          <p>
            The Cross Chain Coalition (CCC) is a collective of builders that
            have united together to educate developers on cross chain
            infrastructure.
          </p>
          <p>
            The CCC aims to expand awareness and increase education for cross
            chain development. Join us in our journey to turn every blockchain
            engineer into a cross chain engineer.
          </p>
        </div>
      </div>
    </div>
    <div className="section section-white section-row page-ccc-history">
      <div className="page-ccc-history-left">
        <h2>HISTORY</h2>
        <p>
          The CCC was founded in May of 2022 by a collection of crypto
          innovators, builders, and investors spanning from various chains and
          ventures.{" "}
        </p>
        <p>
          The current digital asset ecosystem is fragmented by chains and tribes
          all competing for the same future. As invigorating as competition can
          be, we think intra-ecosystem competition is ultimately inefficient. If
          we want to bring the world to crypto, we must first bring crypto to
          the world together. The future of crypto is cross chain.
        </p>
      </div>
      <div className="page-ccc-history-right">
        <img src={imgMask4} />
        <p>
          Our mission is to expand awareness of cross chain communication and
          cross chain development to drive the future of crypto forward.
        </p>
      </div>
    </div>
    <div className="section section-black section-column page-ccc-companies">
      <Marquee speed={120} gradientColor="transparent" loop={0} delay={0}>
        <div>
          <img className="marquee-image" src={imgFigment} />
          <img className="marquee-image" src={imgKallisto} />
          <img className="marquee-image" src={imgVolume} />
          <img className="marquee-image" src={imgPaloma} />
          <img className="marquee-image" src={imgUmee} />
          <img className="marquee-image" src={imgStrangelove} />
          <img className="marquee-image" src={imgCoindesk} />
          <img className="marquee-image" src={imgQuicknode} />
          <img className="marquee-image" src={imgSimpleVC} />
          <img className="marquee-image" src={imgEvmos} />
          <img className="marquee-image" src={imgCoinfx} />
          <img className="marquee-image" src={imgKadena} />
          <img className="marquee-image" src={imgPhlipIo} />
        </div>
      </Marquee>
    </div>
    <div
      className="section section-white section-column page-ccc-pillars"
      style={{
        backgroundImage: `url(${imgMask5})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "40%",
      }}
    >
      <h2>PILLARS</h2>
      {pillars.map((item, index) => (
        <div className="pillar-item" key={`pillar-item-${index}`}>
          <span className="pillar-item-category">{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      <div style={{ width: "100%" }}>
        <a
          href="https://docs.google.com/forms/d/1fr6EHck8hY8z4RgAlCdRbrqWFdVz-8a6C_YNWSLMTWs/edit"
          target="_blank"
          className="ccc-join-community"
        >
          Join the Community
        </a>
      </div>
    </div>
  </div>
)

export default CCC
