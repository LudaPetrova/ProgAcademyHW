import React from "react";
import "./heroCard.css";

export const HeroCard = ({ data }) => {
  return (
    <section class="grid">
      {Array.isArray(data)
        ? data.map((e, i) => {
            const {
              name,
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
              homeworld,
            } = e;
            return (
              <div className="heroCard">
                <div class="heroName">
                  <h1>{name}</h1>
                </div>
                <div class="photo"></div>
                <div class="char">
                  Height:<span class="height">{height}</span>
                </div>
                <div class="char">
                  Mass:<span class="mass">{mass}</span>
                </div>
                <div class="char">
                  Hair color:<span class="hair_color">{hair_color}</span>
                </div>
                <div class="char">
                  Skin color:<span class="skin_color">{skin_color}</span>
                </div>
                <div class="char">
                  Eye color:<span class="eye_color">{eye_color}</span>
                </div>
                <div class="char">
                  Birth year:<span class="birth_year">{birth_year}</span>
                </div>
                <div class="char">
                  Gender:<span class="gender">{gender}</span>
                </div>
                <div class="homeworld">
                  <a target="_blank" href={homeworld} rel="noreferrer">
                    Homeworld
                  </a>
                </div>
              </div>
            );
          })
        : null}
    </section>
  );
};
