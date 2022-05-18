"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[855],{855:function(A,Q,t){t.r(Q),t.d(Q,{default:function(){return u}});var B=t(8152),e=t(6871),r=t(1207),n=t(2791),E=t(6512),a="Cast_list__wM028",c="Cast_item__BhbWF",g=t(184),u=function(){var A=(0,e.UO)().movieId,Q=(0,n.useState)([]),t=(0,B.Z)(Q,2),u=t[0],o=t[1];return(0,n.useEffect)((function(){r.xc(A).then(o)}),[]),console.log(u),(0,g.jsx)("ul",{className:a,children:u.map((function(A){return(0,g.jsxs)("li",{className:c,children:[(0,g.jsx)("img",{src:null===A.profile_path?"".concat(E):"https://image.tmdb.org/t/p/w200/".concat(A.profile_path),alt:A.name}),(0,g.jsx)("h2",{children:A.name}),(0,g.jsxs)("h3",{children:["Character: ",A.character]})]},A.id)}))})}},1207:function(A,Q,t){t.d(Q,{rQ:function(){return c},RU:function(){return g},uC:function(){return u},QV:function(){return o},xc:function(){return C},Hx:function(){return s}});var B=t(5861),e=t(7757),r=t.n(e),n=t(4569),E=t.n(n),a="api_key=5d104e06eaa9cbca519409c6ed30e31b";E().defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var A=(0,B.Z)(r().mark((function A(){var Q;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,E().get("/trending/all/day?".concat(a,"&page=1"));case 3:return Q=A.sent,A.abrupt("return",Q.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}(),g=function(){var A=(0,B.Z)(r().mark((function A(){var Q;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,E().get("/genre/movie/list?".concat(a));case 3:return Q=A.sent,A.abrupt("return",Q.data.genres);case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}(),u=function(){var A=(0,B.Z)(r().mark((function A(Q){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,E().get("/search/movie?".concat(a,"&query='").concat(Q,"'"));case 3:return t=A.sent,A.abrupt("return",t.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(Q){return A.apply(this,arguments)}}(),o=function(){var A=(0,B.Z)(r().mark((function A(Q){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,E().get("/movie/".concat(Q,"?").concat(a));case 3:return t=A.sent,A.abrupt("return",t.data);case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(Q){return A.apply(this,arguments)}}(),C=function(){var A=(0,B.Z)(r().mark((function A(Q){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,E().get("/movie/".concat(Q,"/credits?").concat(a));case 3:return t=A.sent,A.abrupt("return",t.data.cast);case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(Q){return A.apply(this,arguments)}}(),s=function(){var A=(0,B.Z)(r().mark((function A(Q){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,E().get("/movie/".concat(Q,"/reviews?").concat(a));case 3:return t=A.sent,A.abrupt("return",t.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(Q){return A.apply(this,arguments)}}()},6512:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAEsAOEDAREAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIAQYDBAUCCf/EAEgQAAEDAwIEAwYBBwcLBQAAAAEAAgMEBREGBwgSITETQVEUIjJhcYGRFRYXIzN0siY2OEJkotEYJCU3U1RVcqGxwYKSs7Th/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJlQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQYc4NaXEgAdST2CDz6rUdnooJKie6UUcUQ5nuMzeg/FBr36ZNADodU27P/Mf8EHsWbWmndQxeLa7zRVTObky2QDr9Cg9pAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQM4GfJBGu4++Nj0OyOCldHc66TP6uF4IYPUn6+SCuep95tYaonc+W5yUsRZyeDTEsYW/MeaDSXTSO7yOOfUoPhBy09VNSyNkglfG9h5mlpwQUE1aO4mrraKNtJfKMXERsayORruV/TzcfNBMOmN7tGamkZTxXEUtQY+dzKgcjW+o5j0Qb1S1dPXQMqKWeOeF4y18bg5rvoQg5UBAQEBAQEBAQEBAQEBAQEBAQEHxNPHTxPmme1kbAXOc49AB5oK17s8QVbV1dRZ9LzeDRhropakfFIfMtPkggl8jpHFzyXOJySTklB8ICAgICDIdjsg2zR+6GptFTNNtuEhgDeXwJSXRgZz0HkgthtpubbNxLS2aBzYa6MAVFMT1YfUeoQbmgICAgICAgICAgICAgICAgICCD+ILdefT8TtLWoBtTUR5qJj15WHyHzKCsLiT3QfKAgICAgICAg2nbXVs2jdXUNzYR4YkDJWucQ0tPQk49O6C8FDWQXCjhq6WVssEzA9j29nA+aDnQEBAQEBAQEBAQEBAQEBAQde5VTqK31VSwBzoYnSAHzwCUFDNT3yfUd9rbpUftKmVzyM9G5PYIPKQEBAQEBAQEBBlvdBe3br+Yti/c4/4UGxICAgICAgICAgICAgICAgINE3ur6q2bbXWpoqiSnmDWgPYcHBcMoKVk56oMICAgICAgICAgy1BeLaq60l10FaJKOQyNip2wuOMYc0YIQbagICAgICAgICAgICAgICAghvidvlVbdHU1DCWiGvmMcuRkkAZGEFU0BAQEBAQEBAQEGQgt7w4OL9tKfPXE8g/wCqCUkBAQEBAQEBAQEBAQEBAQEEE8V383rN+9O/hQVlQEBAQEBAQEBAQZCC3fDa4HbWAAgn2iXpnqOqCVEBAQEBAQEBAQEBAQEBAQEEE8V383rN+9O/hQVlQEBAQEBAQEBAQEE6cLl7rYL9WWpsZfSTx873nPuEdseXVBZxAQEBAQEBAQEBAQEBAQEBBBXFcP5PWb95d/CgrIgICAgICAgICAgILMcK1mrKW0XO5yxNFLVva2J+RkluQUE8ICAgICAgICAgICAgICAgINA3r0UdZaMqGQR89ZSAzQEv5QMfFn7IKXuaWkg+SDCAgICAgICAgIOSCGSolbFExz3vIa1oHUkoLsbQ6WfpLQlBQylxkkb472vbgsc7qR9kG6ICAgICAgICAgICAgICAgIMOY17S1zQ5rhgg+YQVG4hNFx6a1eaq3251Nb6tgeHNHuGT+tj0QRUgwgICAgICAgygmjhx0DJeNQHUFZE8UlD1j5o8slefLr6d0Fp0BAQEBAQEBAQEBAQEBAQEBAQa3uBo2DXOmamzyPET3gOjkx8Lh1H2QUfu9vfabnVUEj2vfTyuic5vYkHGQg6aAgICAgICDlpojPURQggGRwaCfLJwgvVt/YZNNaOtdrmdE+WCEB7ohhrig2FAQEBAQEBAQEBAQEBAQEBAQEBBTjf+yx2jcSs9movZqaYNe0huGvcRlxH3QRsgICAgICAg3/ZTSz9Ua8oY3UjKqkpneNUsecDkH/7hBdBjWsaGNGGtGAAgygICAgICAgICAgICAgICAgICAgg/id0lUXWyUV9pzI80BLHxMZn3XdS4nyAwgrAUGEBAQEBAQWQ4VbJRuobrei13tjZBTh2enIQDjH1QWAQEBAQEBAQEBAQEBAQEBAQEBAQEGr7odNvNQY/3N6CjB7oMICAgICAgs/wpn+S92GevtY/hCCcUBAQEBAQEBAQEBAQEBAQEBAQEHQvd+tmnKJ1ddayKkp2nHO8+fyQV13a4gY9QW6axacjkjp5eaOoqH95G+jfkUEEnugwgICAgICDfNotxjt5qQVU0RmoqhvhTtB6tbn4gPUILf6d1VZ9WUZq7NXRVcQOHch6tPoQg9VAQEBAQEBAQEBAQEBAQEBAPRB4uqNYWbSFunrrpWRRCJnMI+Yc7/QAIKe7lbl3TcO7uqahzoqKIkU9MD7rG+p9Sg0woMICAgICAgIMoNm0Hr266DvUdxt8rvDyBNAT7srfQhBcvRWs7ZrmyxXS2ytcHDEkWfeid5goPeQEBAQEBAQEBAQEBAQYLgO5AQavqLc3SumaaWeuu9OXRP8ADdFE4PeHf8oQRRq7iipWtq6PTtvfISzENZKcYJ8+VBAN71DdNQ1jqu6Vs1VMenNI7OB6BB52UGEBAQEBAQEBAQZzhBtm3e4dz29vLK6jcXwO6T05Puyt/wAfmgtdpXd7Seq6XxYLnFTSAta6KoIY7mI7DPdBujHte0Oa4OaRkEeaDKAgICAgICD5dIxnxPa36lBrV23N0jZXVMdZfaNs1MDzwh4L8jyA9UGg3Lig0pDRzuoKaumqmt/VMkZytcfmc9EEfX/ig1FcaZkVsoqe2yB2XSAmQkenVBoF+3Q1ZqOqbU1l5qGva3lAhcYx+AQaxNM+d7pJHue9xyS45JPqg40BAQEBAQEBAQEBAQEBB9Me5jg5pII65BQbtpjeTV+lYvAo7m+SEvDnMm9/OPLJ7BBL+muKW3VL5G3+2SUuAPDdT++CfPOeyCYNO6wseqqX2i03GnqWtDS8NcMsyM4I8ig9lAQEBBpe6+4H6PNMuuDKcz1MzvBhB+EPI7lBUfUG4eptS1Tai43ape9g5WhjywAemAg16SaSZ7pJXue93UuccklB8ICAgICAgICAgICAgICAgICAgICAg7NJcqugJNLUzQEkE+G8tz+CCTNLcRGrbHKBXytudPyhgZN05QPMEeeEE+aK3s0trPkhjqfYq17i1tPOQC7AzkHthBvzXNe0OaQWkZBHUFBlBV/ie1SK/UFLZaWve+GkjzPT4w1knkfrgoIQzlBhAQEBAQEHvaH0wdZ6stenm1IpXXCcQCYt5gzPnjplBYKTgnkhIEmuaVhd2DqMjP8AfQaNujww6j23s0l8hrqe822HBmkhYWPhB/rFpJyO3UFB27NsDaLlsXLuK+61raxlPNMKYNb4eWSOYBnv2GUEHIMIM4QAMlBKm43D/eNuNI0Wpq260NVBVvjY2KJrg5vO3mGcoIrPdAQYQEBAQEBBnOEGWSPjcHMcWuHYg4KCftid6Z4KiDS9/lfNFI4Mpah3VzD5MPqPRBZHld6oKHa8v1TqTVdxuNWGCaSUtIaMD3en/hBr6AgICAgICDfNi/8AW7pT9/Z/5QWb4l9otW7nXPT8mmooHR0cczJ3SziMNLnMI+vY9kHpa2qY9reHWWxamukdXc32yS3xkuJM8rwQA3PUhocOvo1B521c9opOFWGov1LLV2qOlqnVMEbsOkYKh/ug/NB97S3zbLem13Ox0mgqC2xUUTGujfBGXOY7IDg9oyCMd85QQxtLstbdWbyX6w3Avms+n6iYSNyQZwyQsY0kevc/RBI9+3g220luA7Qo2+tMlupp20U9Z7PHlj+gPQtyQCepznog1rfjbvTu0OtNOa2tlohns9RU5qLU79m57few3OQGuHl8kE17xa8s2jtvbferrpmmvNJUSRNZRTBpZGXNJB6gjp27IIj2U0FpjeLV+oNe3CwU9HZ4JY46W0tx4TZAwcziAACOmcepQetpTd/bbXuufzIft/aYKCqkdTUtX7PHmRwzjIDQW82OmD5hBC/ETtjR7Ya6FHbCRba+EVVPG45MQLiCzPmAQcfJBFiAgICAgICDuWi5T2a50txpuXxqaRsrOYZGQcjKC5v523P1h/8AagpXUVD6qeSaTq+RxcT8ycoOJAQEBAQEBBvWx72Q7s6Wkke1jG1zCXOOABg+aCfuLLce/wCl7jpxultRTUcc8M5m9klGHEOZjOPqUFW75qi96mqRU3u61tymHQPqZnPLR6DPZBarSldS/wCR3UU5qYRMaGrHhl45s+0P8u6DV+Cqsp6S/akNRNFCHUsQBkeG598+qDi2w3KtWhOITWLLvUsgt13r6qD2kn3I3+OXMcT6HqM9uqDatVcNVJq7cqXWFNqu2CxV1U2tniLsyZJBc1pHukE+eRjPnhBqnFvuXZdTz2rTFkq4q1lte6apqIXBzA8jlDAR3IGcoJT1pYaTfrZuzUWnr3boZWiCYmaTo0tZhzHAdQRn0Qajw/3+27S6m1DtlqW8UAlM0c1PWMkxBI9zBlgJAwcEd++Cg59E8NlHobcWLV9bqu1vstBM+qp2c3LJ5loeT7oAz3BOcIIj4ndxbbuFr+N1nlE9BbKcUjJ29pncxc5w+WTjPyQQ+gICAgICAgyO6C3uUFQUBAQEBAQEBBkEjsgFxIxlBhBkEjzQOY+qDPMfVByCsqWxGETyiI92Bx5T9kHFzH1QcsNZUU5JhnliJ78jiM/gg4zI4kkuJJ7koOR1ZUvibC6eV0bezC4lo+gQcRJPdBhAQEBAQEBBlBb1BUFAQEBAQEBAQEBB9xjLgPU4QWAn4PdTDTpu9HfLfVyGlFTHStje18mW83ID2ygifbzb+t3A1pS6VhqY6CqqPEHiTtJDCxpcQQOv9XCD73P29qtstVzacq62GtmhiZKZYWlrSHDIGCg1LB9EGeUjuEEjv2K1MzbX9ITp7d+SPBE/J4rvF5S/k+Hlx3+aCNyOqDCAgICAgICAgIMoLeoKgoCAgICAgICAgIPuL9o36hB+iF73BotvtPaPnuQa2iuL6ehlmJwIeaEkOPyyBn5FBqNRtCLFv9Y9cWSn/wBG1/j+2tYOkMxhfh/0d/3+qCMN2tCv3H4oGad53RQTU0D6iRvdkTWZcR8/L7oNp13fdmtkrrR6Vl2/prrKYWyzzOhjlfG05AJdJklxxnAwg1vf3Z/StjsNq3F0rQ+Ba5JoH1VEzPJJFJhzXNB+HPYjt1CCY36r0i3YIaifpsnTPsjX/kkBueTxQ3l74+Lr3QU13S1LpfVOoo67SVgNit7adsZpiAMvBOXdCe+R+CDS0BAQEBAQEBAQZHUhBOX6drJ/w24f3P8AFBBiAgICAgICAgICD7i/aN+oQW64rJGHZjSnI9pcKmn7H+zuQe7wt7vDWGnPzZu9Vm72lgDHyO6z0/Zp+Zb2P2QabrXW9FoTixiu9e8NoX0kVNPKOvhtezHN9AcZ+SD296eH247tasptVaYvVqNHVU8bJjLISPd7PYWggjHl07IOtxM6vs+ltr7dtxR10dXcDHTwytaQTHFEB7zsdi4tGB9UHtaCtjNzOF2PS9lrqYV76U0rxI/pFI2bnw7HUZAH4oKr7ibdXfbG9RWe9SUr6uSBtR/m7y9rWkkAE4HXoUGpoCAgICAgICAgz2QOY/JBhAQEBAQEBAQEBBkdEHLJVTSsDJJpHtHYOcSAg+IpZIX88b3Md6tOCgSyvmdzySOe71cclB3qHUN4tkLoaG7V9LE/4mQ1D2NP1AKDoySOlcXve57j1JcckoOzbrvcLRI6W319VRyEYLqeV0ZI+oKD4rK+quM5qK2qnqZnd5Jnl7j9SUHWQEBAQEBAQEBAQEBAQEBAQEEt7a8NuqNzNNN1BQV1vo6WSV8UYqS8Ofy9CRgHpnI+yCPdX6WrtFaluGn7ly+1UMpieWfC7zDh8iCCg8fCBhAwgYQbRtropm4OsaLTr7nHbG1QkJqZG8wZysLu2R3xjug2PWOzTNLblWXRUWoIa8XSSCMVkUWBGZH8vw8xzjv3QY3r2Yfs7cLZSPvLbn7dE+XmEHhcnKcY+I5QRrhAQS9aeH2S6bOSbki/sjayCWb2H2bJPJIWY5+bzxnsgiEjCCQ9ldo37wX2vtTLs22GkpfafEMPi83vtbjGRj4kGsa40wdGauu2nXVIqjbql9P4wZy+Jg98ZOPxQeHj5oBGEGEBAQEBAQEBAQEBB2bfQzXKtp6KnYXz1ErYo2ju5ziAB+JQXwvmqrbsLpPROnwIyJ6mChlz/s8frZPrkjv6oIa4zdGtpL7adW0zB4NwiNLO4dvEZ1afu0/3UHZ0RtLoncfYSpu9qsrY9UUlPLG+Zs0hLp4xn4c495uOmO5QeLwx7Q6d1pQ36/6voBVW2ixDEHyPYA8Dme7LSOwx+KDXdCXXamLVWpaq/wCl6y40zqhostspGySO5OZwIPvdenL3J79EE3aQ0Vtjum2poZtqLppt0UZe2eopnUwcO3uvBGXdc4I/FBDGjNr7NBxG/mJdYjcbVFU1EZa9xaZGiFz25LSDkYH4IPY15o6x6G4ltK2nT9CKKiFXb5PCD3O94yjJy4koPc42sDUWl+b4fZpc/TnCDmst62aLI6awbRXzUFP0bJWsoXSgux1wXkn/ALIOLiH2T0jYtBU+s9M22azyGSLxaR5dhzZO2WuJ5XD0Qbztcyzv4U4magknjtJpar2p1OMyCP2h+eX5oPM270rsZvFZa+z2DTU1DPRsHNJOC2paD0EgeHOz18ifsg8HhZ01NpDeXWVgndzyUFG+DnxjnAnZh33GD90GqVW2J3V4lNT2Z87oKOKumqauRnxCMOAw35kkD/qgkGts+1OltVN0a3aa73GnEjaee7Gmkka15wMhx6kdepBA74QRhxMbO2rbK826tsAkjtVza8CB7i7wJG4yAT15SHDGevQoIUPdBhAQEBAQEBAQEBBNHClov86dzobhNFz0lmjNW8+Xidox+OT/AOkoJl3d3227tmrZ7BqHR7tQ1Fr/AFfjlrC2NzgC5o5uvpn6IPc1lLbN/Ng6yvs1K+N7I3T00Dsc8UsJ+Dp5loI+4QQ9wda1/JOsK7S1VIG012i8SEE9PGZ5fdufwCCTt6n23ZXZm42OyP8ACnvdXMyMdnASuL5CMeTW+6Psg8Hg5obO/Sl+rKVlLJqETlpMoHOxnIOTHmGk5zhBvG08G7w1jWT7iV9EKB1M9tPRwyR+8/nbh7WtHwgZGT6oIqsn9NOY/wBqqP8A6rkGN6P6Velj/aLb/wDKEHucU0Vsn3O0BHeHNbbnu5aguOB4fitzn5eqCRN2qLcqKjtFLtV+TaS38jhUOaY2cg6chbzdA0DPbqg13iGbXR8OdOy6VUdXcGiiFTURuDmyydOZwI7gnJQfO11grdVcKMVktwjNXW0lVFEJHcrS41D8ZPkg4uHraG6bNx3vUesKuioxLTiPkbKHNjY08xc53b7IPC4d9Sw6w3813facYgrKZzovmwTRtafuACg6OhtcWvRvFDrKK71EdLTXSplpmzyHDWyc4LQT5A9Rn1IQSNuBQ76t1BNPoq82aos05DoGTQxB8II7EuaeYfPKCD+JGl3DobLpxmv77brhUTyzvjp6OBrBBgMBJcAObPN6eSCBD3QYQEBAQEBAQEBAQd62Xy52YyG23CrozIAHmCVzObHbOD1Qdeoq5qyd9RUSySzSHmfI92XOPqSUHdodSXm2UxpqG6V1LA4kmKGdzGknv0BQdOlraihqGVNLNLBPGctkjcWuafUEdkHZuV/ut4axtyuNZWiP4PHmc/l+mSgxaL7c7BVistNwq7fUAYEtNM6N2PqCg7c2tNSVFe64TX66yVjmeGZ31TzIW+nNnOOg6IOmL3cm3E3JtfVNriSfaRK4SZIx8XfsgVF6uVZXMr6ivqpquMgsnklc6RpHbDj16IFxvdyu72PuNfVVj4xhjp5XPLR8slB3xrrVDbWLSNQ3cW8N5fZRVv8ACx6cucYQdSo1HeKuhbQVFzrZqRoaGwPmc6MAdsNJx0QZp9TXqkohQ092r4aUZxCyoc1gycn3Qcd0HZumt9T3ujbRXPUN2raVvaCoq3vYPsThB0LdeLjaJHS26uqaOR7eVz4JSwkd8ZHkg4aisnq6h9TUSyTTyO5nySOLnOPqSe5Qe1btw9YWinFNbtUXqjgHaOCtkY0fYFB5VyvFxvM5qLlXVNZMTkyTyue4/clB00BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQf/Z"}}]);
//# sourceMappingURL=855.a470c8f4.chunk.js.map