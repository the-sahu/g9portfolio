(this.webpackJsonpadmin = this.webpackJsonpadmin || []).push([
  [0],
  {
    47: function (e, t, a) {},
    91: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a(18),
        s = a.n(r),
        o = a(4),
        c = a(20),
        i = a(36),
        l = a(37),
        d = a(9),
        u = "NEWS_LIST_REQUEST",
        m = "NEWS_LIST_SUCCESS",
        x = "NEWS_LIST_FAIL",
        p = "NEWS_DETAILS_REQUEST",
        h = "NEWS_DETAILS_SUCCESS",
        j = "NEWS_DETAILS_FAIL",
        b = "NEWS_DELETE_REQUEST",
        f = "NEWS_DELETE_SUCCESS",
        g = "NEWS_DELETE_FAIL",
        v = "NEWS_CREATE_REQUEST",
        O = "NEWS_CREATE_SUCCESS",
        w = "NEWS_CREATE_FAIL",
        y = "NEWS_CREATE_RESET",
        N = "PARTNER_LIST_REQUEST",
        E = "PARTNER_LIST_SUCCESS",
        S = "PARTNER_LIST_FAIL",
        k = "PARTNER_DETAILS_REQUEST",
        L = "PARTNER_DETAILS_SUCCESS",
        T = "PARTNER_DETAILS_FAIL",
        _ = "PARTNER_DELETE_REQUEST",
        C = "PARTNER_DELETE_SUCCESS",
        A = "PARTNER_DELETE_FAIL",
        R = "PARTNER_CREATE_REQUEST",
        I = "PARTNER_CREATE_SUCCESS",
        D = "PARTNER_CREATE_FAIL",
        U = "PARTNER_CREATE_RESET",
        P = "COLLABORATOR_LIST_REQUEST",
        M = "COLLABORATOR_LIST_SUCCESS",
        z = "COLLABORATOR_LIST_FAIL",
        B = "COLLABORATOR_DETAILS_REQUEST",
        F = "COLLABORATOR_DETAILS_SUCCESS",
        H = "COLLABORATOR_DETAILS_FAIL",
        W = "COLLABORATOR_DELETE_REQUEST",
        Q = "COLLABORATOR_DELETE_SUCCESS",
        G = "COLLABORATOR_DELETE_FAIL",
        V = "COLLABORATOR_CREATE_REQUEST",
        J = "COLLABORATOR_CREATE_SUCCESS",
        q = "COLLABORATOR_CREATE_FAIL",
        X = "COLLABORATOR_CREATE_RESET",
        K = "HERO_LIST_REQUEST",
        Y = "HERO_LIST_SUCCESS",
        Z = "HERO_LIST_FAIL",
        $ = "HERO_DETAILS_REQUEST",
        ee = "HERO_DETAILS_SUCCESS",
        te = "HERO_DETAILS_FAIL",
        ae = "HERO_DELETE_REQUEST",
        ne = "HERO_DELETE_SUCCESS",
        re = "HERO_DELETE_FAIL",
        se = "HERO_CREATE_REQUEST",
        oe = "HERO_CREATE_SUCCESS",
        ce = "HERO_CREATE_FAIL",
        ie = "HERO_CREATE_RESET",
        le = "HERO_UPDATE_REQUEST",
        de = "HERO_UPDATE_SUCCESS",
        ue = "HERO_UPDATE_FAIL",
        me = "HERO_UPDATE_RESET",
        xe = "TEAM_LIST_REQUEST",
        pe = "TEAM_LIST_SUCCESS",
        he = "TEAM_LIST_FAIL",
        je = "TEAM_DETAILS_REQUEST",
        be = "TEAM_DETAILS_SUCCESS",
        fe = "TEAM_DETAILS_FAIL",
        ge = "TEAM_DELETE_REQUEST",
        ve = "TEAM_DELETE_SUCCESS",
        Oe = "TEAM_DELETE_FAIL",
        we = "TEAM_CREATE_REQUEST",
        ye = "TEAM_CREATE_SUCCESS",
        Ne = "TEAM_CREATE_FAIL",
        Ee = "TEAM_CREATE_RESET",
        Se = "TEAM_UPDATE_REQUEST",
        ke = "TEAM_UPDATE_SUCCESS",
        Le = "TEAM_UPDATE_FAIL",
        Te = "TEAM_UPDATE_RESET",
        _e = "SUPERSTARDONAR_LIST_REQUEST",
        Ce = "SUPERSTARDONAR_LIST_SUCCESS",
        Ae = "SUPERSTARDONAR_LIST_FAIL",
        Re = "SUPERSTARDONAR_DETAILS_REQUEST",
        Ie = "SUPERSTARDONAR_DETAILS_SUCCESS",
        De = "SUPERSTARDONAR_DETAILS_FAIL",
        Ue = "SUPERSTARDONAR_DELETE_REQUEST",
        Pe = "SUPERSTARDONAR_DELETE_SUCCESS",
        Me = "SUPERSTARDONAR_DELETE_FAIL",
        ze = "SUPERSTARDONAR_CREATE_REQUEST",
        Be = "SUPERSTARDONAR_CREATE_SUCCESS",
        Fe = "SUPERSTARDONAR_CREATE_FAIL",
        He = "SUPERSTARDONAR_CREATE_RESET",
        We = "SUPERSTARDONAR_UPDATE_REQUEST",
        Qe = "SUPERSTARDONAR_UPDATE_SUCCESS",
        Ge = "SUPERSTARDONAR_UPDATE_FAIL",
        Ve = "SUPERSTARDONAR_UPDATE_RESET",
        Je = "ARTICLE_LIST_REQUEST",
        qe = "ARTICLE_LIST_SUCCESS",
        Xe = "ARTICLE_LIST_FAIL",
        Ke = "ARTICLE_DETAILS_REQUEST",
        Ye = "ARTICLE_DETAILS_SUCCESS",
        Ze = "ARTICLE_DETAILS_FAIL",
        $e = "ARTICLE_DELETE_REQUEST",
        et = "ARTICLE_DELETE_SUCCESS",
        tt = "ARTICLE_DELETE_FAIL",
        at = "ARTICLE_CREATE_REQUEST",
        nt = "ARTICLE_CREATE_SUCCESS",
        rt = "ARTICLE_CREATE_FAIL",
        st = "ARTICLE_CREATE_RESET",
        ot = "ARTICLE_UPDATE_REQUEST",
        ct = "ARTICLE_UPDATE_SUCCESS",
        it = "ARTICLE_UPDATE_FAIL",
        lt = "ARTICLE_UPDATE_RESET",
        dt = "TESTIMONIAL_LIST_REQUEST",
        ut = "TESTIMONIAL_LIST_SUCCESS",
        mt = "TESTIMONIAL_LIST_FAIL",
        xt = "TESTIMONIAL_DETAIL_REQUEST",
        pt = "TESTIMONIAL_DETAIL_SUCCESS",
        ht = "TESTIMONIAL_DETAIL_FAIL",
        jt = "TESTIMONIAL_DELETE_REQUEST",
        bt = "TESTIMONIAL_DELETE_SUCCESS",
        ft = "TESTIMONIAL_DELETE_FAIL",
        gt = "TESTIMONIAL_CREATE_REQUEST",
        vt = "TESTIMONIAL_CREATE_SUCCESS",
        Ot = "TESTIMONIAL_CREATE_FAIL",
        wt = "TESTIMONIAL_CREATE_RESET",
        yt = "TESTIMONIAL_UPDATE_REQUEST",
        Nt = "TESTIMONIAL_UPDATE_SUCCESS",
        Et = "TESTIMONIAL_UPDATE_FAIL",
        St = "TESTIMONIAL_UPDATE_RESET",
        kt = "USER_LOGIN_REQUEST",
        Lt = "USER_LOGIN_SUCCESS",
        Tt = "USER_LOGIN_FAIL",
        _t = "USER_LOGOUT",
        Ct = "USER_REGISTER_REQUEST",
        At = "USER_REGISTER_SUCCESS",
        Rt = "USER_REGISTER_FAIL",
        It = "USER_DETAILS_REQUEST",
        Dt = "USER_DETAILS_SUCCESS",
        Ut = "USER_DETAILS_FAIL",
        Pt = "USER_DETAILS_RESET",
        Mt = "USER_UPDATE_PROFILE_REQUEST",
        zt = "USER_UPDATE_PROFILE_SUCCESS",
        Bt = "USER_UPDATE_PROFILE_FAIL",
        Ft = "USER_UPDATE_PROFILE_RESET",
        Ht = "USER_LIST_REQUEST",
        Wt = "USER_LIST_SUCCESS",
        Qt = "USER_LIST_FAIL",
        Gt = "USER_LIST_RESET",
        Vt = "USER_DELETE_REQUEST",
        Jt = "USER_DELETE_SUCCESS",
        qt = "USER_DELETE_FAIL",
        Xt = "USER_UPDATE_REQUEST",
        Kt = "USER_UPDATE_SUCCESS",
        Yt = "USER_UPDATE_FAIL",
        Zt = "USER_UPDATE_RESET",
        $t = Object(c.combineReducers)({
          newsList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { news: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case u:
                return { loading: !0, news: [] };
              case m:
                return { loading: !1, news: t.payload };
              case x:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          newsDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { news: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case p:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case h:
                return { loading: !1, news: t.payload };
              case j:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          newsDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case b:
                return { loading: !0 };
              case f:
                return { loading: !1, success: !0 };
              case g:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          newsCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case v:
                return { loading: !0 };
              case O:
                return { loading: !1, success: !0, news: t.payload };
              case w:
                return { loading: !1, error: t.payload };
              case y:
                return {};
              default:
                return e;
            }
          },
          partnerList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { partner: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case N:
                return { loading: !0, partner: [] };
              case E:
                return { loading: !1, partner: t.payload };
              case S:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          partnerDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { partner: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case k:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case L:
                return { loading: !1, partner: t.payload };
              case T:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          partnerDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case _:
                return { loading: !0 };
              case C:
                return { loading: !1, success: !0 };
              case A:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          partnerCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case R:
                return { loading: !0 };
              case I:
                return { loading: !1, success: !0, partner: t.payload };
              case D:
                return { loading: !1, error: t.payload };
              case U:
                return {};
              default:
                return e;
            }
          },
          collaboratorList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { collaborator: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case P:
                return { loading: !0, collaborator: [] };
              case M:
                return { loading: !1, collaborator: t.payload };
              case z:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          collaboratorDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { collaborator: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case B:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case F:
                return { loading: !1, collaborator: t.payload };
              case H:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          collaboratorDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case W:
                return { loading: !0 };
              case Q:
                return { loading: !1, success: !0 };
              case G:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          collaboratorCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case V:
                return { loading: !0 };
              case J:
                return { loading: !1, success: !0, collaborator: t.payload };
              case q:
                return { loading: !1, error: t.payload };
              case X:
                return {};
              default:
                return e;
            }
          },
          heroList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { heros: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case K:
                return { loading: !0, heros: [] };
              case Y:
                return { loading: !1, heros: t.payload };
              case Z:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          heroDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { hero: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case $:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case ee:
                return { loading: !1, hero: t.payload };
              case te:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          heroDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ae:
                return { loading: !0 };
              case ne:
                return { loading: !1, success: !0 };
              case re:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          heroCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case se:
                return { loading: !0 };
              case oe:
                return { loading: !1, success: !0, hero: t.payload };
              case ce:
                return { loading: !1, error: t.payload };
              case ie:
                return {};
              default:
                return e;
            }
          },
          heroUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { hero: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case le:
                return { loading: !0 };
              case de:
                return { loading: !1, success: !0, hero: t.payload };
              case ue:
                return { loading: !1, error: t.payload };
              case me:
                return { hero: {} };
              default:
                return e;
            }
          },
          teamList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { teams: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case xe:
                return { loading: !0, teams: [] };
              case pe:
                return { loading: !1, teams: t.payload };
              case he:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          teamDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { team: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case je:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case be:
                return { loading: !1, team: t.payload };
              case fe:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          teamDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ge:
                return { loading: !0 };
              case ve:
                return { loading: !1, success: !0 };
              case Oe:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          teamCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case we:
                return { loading: !0 };
              case ye:
                return { loading: !1, success: !0, team: t.payload };
              case Ne:
                return { loading: !1, error: t.payload };
              case Ee:
                return {};
              default:
                return e;
            }
          },
          teamUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { team: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Se:
                return { loading: !0 };
              case ke:
                return { loading: !1, success: !0, team: t.payload };
              case Le:
                return { loading: !1, error: t.payload };
              case Te:
                return { team: {} };
              default:
                return e;
            }
          },
          superstarDonarList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { superstarDonars: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case _e:
                return { loading: !0, superstarDonars: [] };
              case Ce:
                return { loading: !1, superstarDonars: t.payload };
              case Ae:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          superstarDonarDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { superstarDonar: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Re:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case Ie:
                return { loading: !1, superstarDonar: t.payload };
              case De:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          superstarDonarDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ue:
                return { loading: !0 };
              case Pe:
                return { loading: !1, success: !0 };
              case Me:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          superstarDonarCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ze:
                return { loading: !0 };
              case Be:
                return { loading: !1, success: !0, superstarDonar: t.payload };
              case Fe:
                return { loading: !1, error: t.payload };
              case He:
                return {};
              default:
                return e;
            }
          },
          superstarDonarUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { superstarDonar: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case We:
                return { loading: !0 };
              case Qe:
                return { loading: !1, success: !0, superstarDonar: t.payload };
              case Ge:
                return { loading: !1, error: t.payload };
              case Ve:
                return { superstarDonar: {} };
              default:
                return e;
            }
          },
          articleList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { articles: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Je:
                return { loading: !0, articles: [] };
              case qe:
                return { loading: !1, articles: t.payload };
              case Xe:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          articleDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { article: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ke:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case Ye:
                return { loading: !1, article: t.payload };
              case Ze:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          articleDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case $e:
                return { loading: !0 };
              case et:
                return { loading: !1, success: !0 };
              case tt:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          articleCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case at:
                return { loading: !0 };
              case nt:
                return { loading: !1, success: !0, article: t.payload };
              case rt:
                return { loading: !1, error: t.payload };
              case st:
                return {};
              default:
                return e;
            }
          },
          articleUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { article: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ot:
                return { loading: !0 };
              case ct:
                return { loading: !1, success: !0, article: t.payload };
              case it:
                return { loading: !1, error: t.payload };
              case lt:
                return { article: {} };
              default:
                return e;
            }
          },
          testimonialList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { testimonials: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case dt:
                return { loading: !0, testimonials: [] };
              case ut:
                return { loading: !1, testimonials: t.payload };
              case mt:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          testimonialDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { testimonial: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case xt:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case pt:
                return { loading: !1, testimonial: t.payload };
              case ht:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          testimonialDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case jt:
                return { loading: !0 };
              case bt:
                return { loading: !1, success: !0 };
              case ft:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          testimonialCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case gt:
                return { loading: !0 };
              case vt:
                return { loading: !1, success: !0, testimonial: t.payload };
              case Ot:
                return { loading: !1, error: t.payload };
              case wt:
                return {};
              default:
                return e;
            }
          },
          testimonialUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { testimonial: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case yt:
                return { loading: !0 };
              case Nt:
                return { loading: !1, success: !0, testimonial: t.payload };
              case Et:
                return { loading: !1, error: t.payload };
              case St:
                return { testimonial: {} };
              default:
                return e;
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case kt:
                return { loading: !0 };
              case Lt:
                return { loading: !1, userInfo: t.payload };
              case Tt:
                return { loading: !1, error: t.payload };
              case _t:
                return {};
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ct:
                return { loading: !0 };
              case At:
                return { loading: !1, userInfo: t.payload };
              case Rt:
                return { loading: !1, error: t.payload };
              case _t:
                return {};
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case It:
                return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
              case Dt:
                return { loading: !1, user: t.payload };
              case Ut:
                return { loading: !1, error: t.payload };
              case Pt:
                return { user: {} };
              default:
                return e;
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Mt:
                return { loading: !0 };
              case zt:
                return { loading: !1, success: !0, userInfo: t.payload };
              case Bt:
                return { loading: !1, error: t.payload };
              case Ft:
                return {};
              default:
                return e;
            }
          },
          userList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { users: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ht:
                return { loading: !0 };
              case Wt:
                return { loading: !1, users: t.payload };
              case Qt:
                return { loading: !1, error: t.payload };
              case Gt:
                return { users: [] };
              default:
                return e;
            }
          },
          userDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Vt:
                return { loading: !0 };
              case Jt:
                return { loading: !1, success: !0 };
              case qt:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Xt:
                return { loading: !0 };
              case Kt:
                return { loading: !1, success: !0 };
              case Yt:
                return { loading: !1, error: t.payload };
              case Zt:
                return { user: {} };
              default:
                return e;
            }
          },
        }),
        ea = {
          userLogin: {
            userInfo: localStorage.getItem("userInfo")
              ? JSON.parse(localStorage.getItem("userInfo"))
              : null,
          },
        },
        ta = [i.a],
        aa = Object(c.createStore)(
          $t,
          ea,
          Object(l.composeWithDevTools)(c.applyMiddleware.apply(void 0, ta))
        ),
        na = (a(47), a(12)),
        ra = a(7),
        sa = a.p + "static/media/logo.42666380.png",
        oa = a(1),
        ca = function () {
          return Object(oa.jsx)("div", {
            children: Object(oa.jsx)("footer", {
              className: "text-primary-100 bg-primary-500 body-font",
              children: Object(oa.jsxs)("div", {
                className:
                  "max-w-7xl container py-4 px-3 mx-auto flex items-center  sm:flex-row flex-col",
                children: [
                  Object(oa.jsxs)("div", {
                    className:
                      "flex items-center md:w-1/3  sm:flex-row flex-col",
                    children: [
                      Object(oa.jsx)(ra.b, {
                        to: "/",
                        children: Object(oa.jsx)("img", {
                          src: sa,
                          className: "h-8",
                        }),
                      }),
                      Object(oa.jsxs)("p", {
                        className:
                          "text-sm text-primary-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary-100 sm:py-2 sm:mt-0 mt-4",
                        children: [
                          "\xa9 2021 All Rights Reserved \u2014",
                          Object(oa.jsx)(ra.b, {
                            to: "/",
                            className: "text-primary-50 font-semibold ml-1",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "MBDD",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(oa.jsx)("div", {
                    className: "md:w-1/3 flex items-center justify-center",
                    children: Object(oa.jsxs)("p", {
                      className:
                        "text-sm text-primary-100 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4",
                      children: [
                        "Krafted with love @",
                        Object(oa.jsx)(ra.b, {
                          to: "http://www.grootify.com/",
                          className: "text-primary-50 font-semibold ml-1",
                          rel: "noopener noreferrer",
                          target: "_blank",
                          children: "Grootify",
                        }),
                      ],
                    }),
                  }),
                  Object(oa.jsx)("div", {
                    className: "w-1/3 flex items-center justify-between",
                    children: Object(oa.jsxs)("span", {
                      className:
                        "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                      children: [
                        Object(oa.jsx)("a", {
                          className: "text-primary-100",
                          children: Object(oa.jsx)("svg", {
                            fill: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: Object(oa.jsx)("path", {
                              d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                            }),
                          }),
                        }),
                        Object(oa.jsx)("a", {
                          className: "ml-3 text-primary-100",
                          children: Object(oa.jsx)("svg", {
                            fill: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: Object(oa.jsx)("path", {
                              d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                            }),
                          }),
                        }),
                        Object(oa.jsx)("a", {
                          className: "ml-3 text-primary-100",
                          children: Object(oa.jsxs)("svg", {
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: [
                              Object(oa.jsx)("rect", {
                                width: "20",
                                height: "20",
                                x: "2",
                                y: "2",
                                rx: "5",
                                ry: "5",
                              }),
                              Object(oa.jsx)("path", {
                                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                              }),
                            ],
                          }),
                        }),
                        Object(oa.jsx)("a", {
                          className: "ml-3 text-primary-100",
                          children: Object(oa.jsxs)("svg", {
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "0",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: [
                              Object(oa.jsx)("path", {
                                stroke: "none",
                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                              }),
                              Object(oa.jsx)("circle", {
                                cx: "4",
                                cy: "4",
                                r: "2",
                                stroke: "none",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        ia = a(2),
        la = a.n(ia),
        da = a(3),
        ua = a(6),
        ma = a.n(ua),
        xa = function () {
          return function (e) {
            localStorage.removeItem("userInfo"),
              e({ type: _t }),
              e({ type: Pt }),
              e({ type: Gt }),
              (document.location.href = "/mbdd_admin");
          };
        },
        pa = function () {
          var e = Object(o.b)();
          Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo;
          return Object(oa.jsx)("div", {
            children: Object(oa.jsx)("nav", {
              className: "  z-40 w-full fixed top-0 shadow bg-white ",
              role: "navigation",
              children: Object(oa.jsxs)("div", {
                className:
                  "container max-w-7xl  mx-auto   flex flex-wrap items-center md:flex-no-wrap",
                children: [
                  Object(oa.jsx)("div", {
                    className: " md:mr-8",
                    children: Object(oa.jsx)(ra.b, {
                      to: "/dashboard",
                      children: Object(oa.jsx)("img", {
                        alt: "",
                        src: sa,
                        className: "h-12",
                      }),
                    }),
                  }),
                  Object(oa.jsx)("div", {
                    className: "ml-auto md:hidden",
                    children: Object(oa.jsx)("button", {
                      className: "flex items-center px-3 py-2 border rounded",
                      type: "button",
                      children: Object(oa.jsxs)("svg", {
                        className: "h-3 w-3",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          Object(oa.jsx)("title", { children: "Menu" }),
                          Object(oa.jsx)("path", {
                            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(oa.jsxs)("div", {
                    className:
                      "w-full md:w-auto  md:flex-grow md:flex md:items-center hidden",
                    children: [
                      Object(oa.jsxs)("ul", {
                        className:
                          "flex flex-col mt-4  -mx-4 pt-4 border-t md:flex-row md:items-center  md:mx-auto md:mt-0 md:pt-0 md:border-0",
                        children: [
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/dashboard",
                              className:
                                "block px-4 py-1 font-normal   md:p-2 lg:px-5  hover:text-primary-500  text-sm",
                              children: "Dashboard",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/homeSlider",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm ",
                              children: "Home Slider",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/news",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm ",
                              children: "In News",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/partner",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm ",
                              children: "Partners",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/collaborator",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm ",
                              children: "Collaborators",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/team",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm ",
                              children: "Team",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/superstarDonor",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm ",
                              children: "Superstar Donors",
                            }),
                          }),
                          Object(oa.jsx)("li", {
                            children: Object(oa.jsx)(ra.b, {
                              to: "/Blog",
                              className:
                                "block px-4 py-1 font-normal  md:p-2 lg:px-5 hover:text-primary-500 text-sm",
                              children: "Blog",
                            }),
                          }),
                        ],
                      }),
                      Object(oa.jsx)("div", {
                        className:
                          "block px-4 py-1 font-normal md:p-2 lg:pl-10 ",
                        children: Object(oa.jsxs)("button", {
                          onClick: function () {
                            e(xa());
                          },
                          className:
                            "flex px-5 py-2 text-sm font-normal leading-6 text-center text-primary-50  transition bg-primary-500 rounded shadow ripple hover:shadow-lg hover:bg-primary-600 focus:outline-none",
                          children: [
                            "Logout",
                            Object(oa.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-6 text-primary-50  w-6 ml-2",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: Object(oa.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ha = a(11),
        ja = a(22),
        ba = a.n(ja),
        fa = a(23),
        ga = a.n(fa),
        va = function (e) {
          var t = e.history,
            a = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          return (
            Object(n.useEffect)(
              function () {
                a || t.push("/mbdd_admin");
              },
              [t, a]
            ),
            Object(oa.jsxs)("div", {
              className: "bg-primary-50  py-20",
              children: [
                Object(oa.jsx)("div", {
                  children: Object(oa.jsx)("div", {
                    class:
                      "relative w-full mx-auto mb-10 bg-white z-20 overflow-hidden transition-shadow duration-300   rounded-lg  lg:max-w-6xl group ",
                    children: Object(oa.jsxs)("div", {
                      class:
                        "relative flex mx-auto flex-col items-center justify-around  h-full py-5 duration-300  rounded-sm transition-color sm:items-stretch sm:flex-row",
                      children: [
                        Object(oa.jsxs)("div", {
                          class: "w-1/3 py-8 text-center",
                          children: [
                            Object(oa.jsx)("div", {
                              className:
                                "h-10 w-10 mx-auto mb-5 flex items-center jusity-center",
                              children: Object(oa.jsx)("img", {
                                className: "mx-auto",
                                src: "blood-donation.svg",
                                alt: "",
                              }),
                            }),
                            Object(oa.jsxs)("h6", {
                              class:
                                "text-4xl font-bold text-primary-500 sm:text-3xl ",
                              children: [
                                Object(oa.jsx)(ba.a, {
                                  start: 0,
                                  end: 104978,
                                  redraw: !0,
                                  children: function (e) {
                                    var t = e.countUpRef,
                                      a = e.start;
                                    return Object(oa.jsx)(ga.a, {
                                      onChange: a,
                                      delayedCall: !0,
                                      children: Object(oa.jsx)("span", {
                                        class: "",
                                        ref: t,
                                      }),
                                    });
                                  },
                                }),
                                "+",
                              ],
                            }),
                            Object(oa.jsx)("p", {
                              class:
                                "text-center md:text-base text-primary-500",
                              children: "Blood Units Collected",
                            }),
                          ],
                        }),
                        Object(oa.jsxs)("div", {
                          class: "w-1/3 py-8 text-center",
                          children: [
                            Object(oa.jsx)("div", {
                              className:
                                "h-10 w-10 mx-auto mb-5 flex items-center jusity-center",
                              children: Object(oa.jsx)("img", {
                                className: "mx-auto",
                                src: "blood-donation.svg",
                                alt: "",
                              }),
                            }),
                            Object(oa.jsxs)("h6", {
                              class:
                                "text-4xl font-bold text-primary-500 sm:text-3xl ",
                              children: [
                                Object(oa.jsx)(ba.a, {
                                  start: 0,
                                  end: 314561,
                                  redraw: !0,
                                  children: function (e) {
                                    var t = e.countUpRef,
                                      a = e.start;
                                    return Object(oa.jsx)(ga.a, {
                                      onChange: a,
                                      delayedCall: !0,
                                      children: Object(oa.jsx)("span", {
                                        class: "",
                                        ref: t,
                                      }),
                                    });
                                  },
                                }),
                                "+",
                              ],
                            }),
                            Object(oa.jsx)("p", {
                              class:
                                "text-center md:text-base text-primary-500",
                              children: "Lives Saved",
                            }),
                          ],
                        }),
                        Object(oa.jsxs)("div", {
                          class: "w-1/3 py-8 text-center",
                          children: [
                            Object(oa.jsx)("div", {
                              className:
                                "h-10 w-10  rounded-full mx-auto mb-5 flex items-center jusity-center",
                              children: Object(oa.jsx)("img", {
                                className: "mx-auto",
                                src: "blood-donation.svg",
                                alt: "",
                              }),
                            }),
                            Object(oa.jsxs)("h6", {
                              class:
                                "text-4xl font-bold text-primary-500 sm:text-3xl ",
                              children: [
                                Object(oa.jsx)(ba.a, {
                                  start: 0,
                                  end: 1041,
                                  redraw: !0,
                                  children: function (e) {
                                    var t = e.countUpRef,
                                      a = e.start;
                                    return Object(oa.jsx)(ga.a, {
                                      onChange: a,
                                      delayedCall: !0,
                                      children: Object(oa.jsx)("span", {
                                        class: "",
                                        ref: t,
                                      }),
                                    });
                                  },
                                }),
                                "+",
                              ],
                            }),
                            Object(oa.jsx)("p", {
                              class:
                                "text-center md:text-base text-primary-500",
                              children: "Camps Organized across India",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                Object(oa.jsx)("div", {
                  className:
                    "max-w-6xl mx-auto  flex items-center justify-center  bg-white h-96   shadow-sm",
                  children: Object(oa.jsxs)("div", {
                    className: "mx-auto ",
                    children: [
                      Object(oa.jsx)(ha.c, {
                        className: "h-24 w-24 mx-auto text-primary-400  ",
                        "aria-hidden": "true",
                      }),
                      Object(oa.jsxs)("h1", {
                        className:
                          "text-5xl items-center font-semibold text-center text-primary-500",
                        children: [" ", "Welcome Admin"],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Oa = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: yt }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.put("/api/testimonials/".concat(e._id), e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: Nt, payload: i }),
                            a({ type: pt, payload: i }),
                            (t.next = 17);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: Et, payload: l });
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        wa = function (e) {
          var t = e.history,
            a = Object(o.b)(),
            r = Object(o.c)(function (e) {
              return e.testimonialList;
            }),
            s = (r.loading, r.error, r.testimonials),
            c = Object(o.c)(function (e) {
              return e.testimonialDelete;
            }),
            i = (c.loading, c.error, c.success),
            l = Object(o.c)(function (e) {
              return e.testimonialCreate;
            }),
            d = (l.loading, l.error, l.success),
            u = l.testimonial,
            m = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              a({ type: wt }),
                m || t.push("/mbdd_admin"),
                d
                  ? t.push("/testimonials/".concat(u._id, "/edit"))
                  : a(
                      (function () {
                        var e = Object(da.a)(
                          la.a.mark(function e(t) {
                            var a, n;
                            return la.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        t({ type: dt }),
                                        (e.next = 4),
                                        ma.a.get("/api/testimonials")
                                      );
                                    case 4:
                                      (a = e.sent),
                                        (n = a.data),
                                        t({ type: ut, payload: n }),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(0)),
                                        t({
                                          type: mt,
                                          payload:
                                            e.t0.response &&
                                            e.t0.response.data.message
                                              ? e.t0.response.data.message
                                              : e.t0.message,
                                        });
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 9]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
            },
            [t, i, d, u, m]
          );
          var x = function (e) {
            window.confirm("Are you sure") &&
              a(
                (function (e) {
                  return (function () {
                    var t = Object(da.a)(
                      la.a.mark(function t(a, n) {
                        var r, s, o, c;
                        return la.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: jt }),
                                    (r = n()),
                                    (s = r.userLogin.userInfo),
                                    (o = {
                                      headers: {
                                        Authorization: "Bearer ".concat(
                                          s.token
                                        ),
                                      },
                                    }),
                                    (t.next = 6),
                                    ma.a.delete(
                                      "/api/testimonials/".concat(e),
                                      o
                                    )
                                  );
                                case 6:
                                  a({ type: bt }), (t.next = 14);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    "Not authorized, token failed" ===
                                      (c =
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message) && a(xa()),
                                    a({ type: ft, payload: c });
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e, a) {
                      return t.apply(this, arguments);
                    };
                  })();
                })(e)
              );
          };
          return Object(oa.jsxs)("div", {
            className: " bg-yellow-50 py-20",
            children: [
              Object(oa.jsxs)("div", {
                className: "py-5",
                children: [
                  Object(oa.jsx)("h1", {
                    className:
                      "text-center  md:text-3xl text-blue-dianne font-semibold",
                    children: "Testimonials",
                  }),
                  Object(oa.jsx)("div", {
                    className: "h-px max-w-md my-2 bg-blue-dianne-300 mx-auto",
                  }),
                ],
              }),
              Object(oa.jsxs)("div", {
                className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                children: [
                  Object(oa.jsxs)("div", {
                    className: "flex justify-start items-center",
                    children: [
                      Object(oa.jsx)("div", {
                        className: "  py-1 font-bold  ",
                        children: Object(oa.jsxs)("button", {
                          onClick: function () {
                            a(
                              (function () {
                                var e = Object(da.a)(
                                  la.a.mark(function e(t, a) {
                                    var n, r, s, o, c, i;
                                    return la.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                t({ type: gt }),
                                                (n = a()),
                                                (r = n.userLogin.userInfo),
                                                (s = {
                                                  headers: {
                                                    Authorization:
                                                      "Bearer ".concat(r.token),
                                                  },
                                                }),
                                                (e.next = 6),
                                                ma.a.post(
                                                  "/api/testimonials",
                                                  {},
                                                  s
                                                )
                                              );
                                            case 6:
                                              (o = e.sent),
                                                (c = o.data),
                                                t({ type: vt, payload: c }),
                                                (e.next = 16);
                                              break;
                                            case 11:
                                              (e.prev = 11),
                                                (e.t0 = e.catch(0)),
                                                "Not authorized, token failed" ===
                                                  (i =
                                                    e.t0.response &&
                                                    e.t0.response.data.message
                                                      ? e.t0.response.data
                                                          .message
                                                      : e.t0.message) &&
                                                  t(xa()),
                                                t({ type: Ot, payload: i });
                                            case 16:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 11]]
                                    );
                                  })
                                );
                                return function (t, a) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          },
                          className:
                            "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-white text-sm transition bg-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none",
                          children: [
                            Object(oa.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-6 w-6 ",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: Object(oa.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                              }),
                            }),
                            "New",
                          ],
                        }),
                      }),
                      Object(oa.jsx)("div", {
                        className: "h-px w-full my-2 bg-blue-dianne-200",
                      }),
                    ],
                  }),
                  Object(oa.jsx)("div", {
                    className: "flex flex-wrap mt-5 -m-4",
                    children:
                      s &&
                      s.map(function (e) {
                        return Object(oa.jsx)(
                          "div",
                          {
                            className: "p-4 md:w-1/3 w-full",
                            children: Object(oa.jsxs)("div", {
                              className:
                                "h-full bg-white  hover:shadow-md shadow border border-gray-100 p-8 rounded",
                              children: [
                                Object(oa.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "currentColor",
                                  className: "block w-5 h-5 text-gray-400 mb-4",
                                  viewBox: "0 0 975.036 975.036",
                                  children: Object(oa.jsx)("path", {
                                    d: "M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z",
                                  }),
                                }),
                                Object(oa.jsx)("p", {
                                  className: "leading-relaxed text-sm mb-6",
                                  children: e.description,
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "inline-flex items-center",
                                  children: [
                                    Object(oa.jsx)("img", {
                                      alt: "",
                                      src: e.image,
                                      className:
                                        "w-10 h-10 rounded-full flex-shrink-0 object-cover object-center",
                                    }),
                                    Object(oa.jsxs)("span", {
                                      className: "flex-grow flex flex-col pl-4",
                                      children: [
                                        Object(oa.jsx)("span", {
                                          className:
                                            "text-sm font-bold  text-blue-dianne-500",
                                          children: e.name,
                                        }),
                                        Object(oa.jsx)("span", {
                                          className: "text-gray-500  text-xs",
                                          children: e.designation,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className:
                                    "flex flex-wrap justify-between mt-3",
                                  children: [
                                    Object(oa.jsx)(ra.b, {
                                      to: "/testimonials/".concat(
                                        e._id,
                                        "/edit"
                                      ),
                                      className: "  py-1 font-bold  ",
                                      children: Object(oa.jsxs)("button", {
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center border border-blue-dianne-500 text-white text-sm transition bg-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: [
                                          Object(oa.jsx)("svg", {
                                            className: "w-5 h-5 mr-1",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: Object(oa.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 1.5,
                                              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                            }),
                                          }),
                                          "Edit",
                                        ],
                                      }),
                                    }),
                                    Object(oa.jsx)("div", {
                                      className: "  py-1 font-bold  ",
                                      children: Object(oa.jsxs)("button", {
                                        onClick: function () {
                                          return x(e._id);
                                        },
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-blue-dianne-500 text-sm transition border border-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: [
                                          Object(oa.jsx)("svg", {
                                            className: "w-5 h-5 mr-1",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: Object(oa.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 1.5,
                                              d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                            }),
                                          }),
                                          "Delete",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e._id
                        );
                      }),
                  }),
                ],
              }),
            ],
          });
        },
        ya = a(5),
        Na = a(38),
        Ea = a.n(Na),
        Sa =
          (a(90),
          function () {
            return Object(oa.jsx)(Ea.a, {
              className: "fixed block ",
              style: { top: "50%", left: "46%" },
              type: "ThreeDots",
              color: "#8a0707",
              secondaryColor: "#e2c1c1",
              height: 100,
              width: 100,
              timeout: 1e4,
            });
          }),
        ka = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: v }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.post("/api/news", e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: O, payload: i }),
                            (t.next = 16);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: w, payload: l });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        La = function (e) {
          var t = e.history,
            a = (e.match, Object(n.useState)("")),
            r = Object(ya.a)(a, 2),
            s = r[0],
            c = r[1],
            i = Object(n.useState)(""),
            l = Object(ya.a)(i, 2),
            d = l[0],
            p = l[1],
            h = Object(n.useState)(!1),
            j = Object(ya.a)(h, 2),
            v = j[0],
            O = j[1],
            w = Object(o.b)(),
            N = Object(o.c)(function (e) {
              return e.newsList;
            }),
            E = (N.loading, N.error, N.news);
          console.log(E);
          var S = Object(o.c)(function (e) {
              return e.newsDelete;
            }),
            k = (S.loading, S.error, S.success),
            L = Object(o.c)(function (e) {
              return e.newsCreate;
            }),
            T = (L.loading, L.error, L.success),
            _ = L.news,
            C = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              w({ type: y }),
                C || t.push("/mbdd_admin"),
                T ||
                  (p(""),
                  c(""),
                  w(
                    (function () {
                      var e = Object(da.a)(
                        la.a.mark(function e(t) {
                          var a, n;
                          return la.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: u }),
                                      (e.next = 4),
                                      ma.a.get("/api/news")
                                    );
                                  case 4:
                                    (a = e.sent),
                                      (n = a.data),
                                      t({ type: m, payload: n }),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: x,
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.message
                                            ? e.t0.response.data.message
                                            : e.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ));
            },
            [t, k, T, _, C]
          );
          var A = function (e) {
              window.confirm("Are you sure") &&
                w(
                  (function (e) {
                    return (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a, n) {
                          var r, s, o, c;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: b }),
                                      (r = n()),
                                      (s = r.userLogin.userInfo),
                                      (o = {
                                        headers: {
                                          Authorization: "Bearer ".concat(
                                            s.token
                                          ),
                                        },
                                      }),
                                      (t.next = 6),
                                      ma.a.delete("/api/news/".concat(e), o)
                                    );
                                  case 6:
                                    a({ type: f }), (t.next = 14);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      "Not authorized, token failed" ===
                                        (c =
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message) && a(xa()),
                                      a({ type: g, payload: c });
                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e, a) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(e)
                );
            },
            R = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              O(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              p(o),
                              O(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              O(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({ name: s, image: d }),
                            w(ka({ name: s, image: d }));
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: v
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "News",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsxs)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: [
                        Object(oa.jsxs)("div", {
                          className:
                            "flex items-center justify-start space-x-10",
                          children: [
                            Object(oa.jsxs)("form", {
                              onSubmit: I,
                              className: "w-1/3",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " text-sm font-medium  text-gray-700",
                                  children: "Cover photo",
                                }),
                                Object(oa.jsx)("div", {
                                  className:
                                    "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-64 border-gray-300 border-dashed rounded-md",
                                  children: Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: d,
                                            onChange: function (e) {
                                              return p(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: R,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG, JPG, GIF up to 5MB",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-full ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "name",
                                      id: "name",
                                      value: s,
                                      onChange: function (e) {
                                        return c(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter name..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsx)("div", {
                                  className:
                                    "flex justify-start mt-2 items-center",
                                  children: Object(oa.jsx)("div", {
                                    className: "  py-1 font-bold  ",
                                    children: Object(oa.jsx)("button", {
                                      className:
                                        "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                      children: "Save",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d &&
                              Object(oa.jsx)("div", {
                                className: "w-1/2",
                                children: Object(oa.jsx)("img", {
                                  src: d,
                                  className:
                                    "h-auto w-full object-cover object-center",
                                }),
                              }),
                          ],
                        }),
                        Object(oa.jsx)("div", {
                          className: "flex flex-wrap mt-5 -m-4",
                          children:
                            E &&
                            E.map(function (e) {
                              return Object(oa.jsx)(
                                "div",
                                {
                                  className: "p-4 md:w-1/3 w-full",
                                  children: Object(oa.jsxs)("div", {
                                    className:
                                      "h-full bg-white  hover:shadow-md space-y-5 shadow border border-gray-100 p-5 rounded",
                                    children: [
                                      Object(oa.jsx)("img", {
                                        src: e.image,
                                        className:
                                          "h-20 object-center object-contain w-full",
                                        alt: e.name,
                                      }),
                                      Object(oa.jsx)("div", {
                                        className: "inline-flex items-center",
                                        children: Object(oa.jsx)("span", {
                                          className:
                                            "text-base font-bold  text-primary-500",
                                          children: e.name,
                                        }),
                                      }),
                                      Object(oa.jsx)("button", {
                                        onClick: function () {
                                          return A(e._id);
                                        },
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: Object(oa.jsx)("svg", {
                                          className: "w-5 h-5 mr-1",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(oa.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1.5,
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e._id
                              );
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        Ta = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: R }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.post("/api/partner", e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: I, payload: i }),
                            (t.next = 16);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: D, payload: l });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        _a = function (e) {
          var t = e.history,
            a = (e.match, Object(n.useState)("")),
            r = Object(ya.a)(a, 2),
            s = r[0],
            c = r[1],
            i = Object(n.useState)(""),
            l = Object(ya.a)(i, 2),
            d = l[0],
            u = l[1],
            m = Object(n.useState)(!1),
            x = Object(ya.a)(m, 2),
            p = x[0],
            h = x[1],
            j = Object(o.b)(),
            b = Object(o.c)(function (e) {
              return e.partnerList;
            }),
            f = (b.loading, b.error, b.partner);
          console.log(f);
          var g = Object(o.c)(function (e) {
              return e.partnerDelete;
            }),
            v = (g.loading, g.error, g.success),
            O = Object(o.c)(function (e) {
              return e.partnerCreate;
            }),
            w = (O.loading, O.error, O.success),
            y = O.partner,
            k = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              j({ type: U }),
                k || t.push("/mbdd_admin"),
                w ||
                  (u(""),
                  c(""),
                  j(
                    (function () {
                      var e = Object(da.a)(
                        la.a.mark(function e(t) {
                          var a, n;
                          return la.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: N }),
                                      (e.next = 4),
                                      ma.a.get("/api/partner")
                                    );
                                  case 4:
                                    (a = e.sent),
                                      (n = a.data),
                                      t({ type: E, payload: n }),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: S,
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.message
                                            ? e.t0.response.data.message
                                            : e.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ));
            },
            [t, v, w, y, k]
          );
          var L = function (e) {
              window.confirm("Are you sure") &&
                j(
                  (function (e) {
                    return (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a, n) {
                          var r, s, o, c;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: _ }),
                                      (r = n()),
                                      (s = r.userLogin.userInfo),
                                      (o = {
                                        headers: {
                                          Authorization: "Bearer ".concat(
                                            s.token
                                          ),
                                        },
                                      }),
                                      (t.next = 6),
                                      ma.a.delete("/api/partner/".concat(e), o)
                                    );
                                  case 6:
                                    a({ type: C }), (t.next = 14);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      "Not authorized, token failed" ===
                                        (c =
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message) && a(xa()),
                                      a({ type: A, payload: c });
                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e, a) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(e)
                );
            },
            T = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              h(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              u(o),
                              h(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              h(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            R = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({ name: s, image: d }),
                            j(Ta({ name: s, image: d }));
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: p
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Partners",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsxs)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: [
                        Object(oa.jsxs)("div", {
                          className:
                            "flex items-center justify-start space-x-10",
                          children: [
                            Object(oa.jsxs)("form", {
                              onSubmit: R,
                              className: "w-1/3",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " text-sm font-medium  text-gray-700",
                                  children: "Cover photo",
                                }),
                                Object(oa.jsx)("div", {
                                  className:
                                    "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-64 border-gray-300 border-dashed rounded-md",
                                  children: Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: d,
                                            onChange: function (e) {
                                              return u(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: T,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG, JPG, GIF up to 5MB",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-full ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "name",
                                      id: "name",
                                      value: s,
                                      onChange: function (e) {
                                        return c(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter name..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsx)("div", {
                                  className:
                                    "flex justify-start mt-2 items-center",
                                  children: Object(oa.jsx)("div", {
                                    className: "  py-1 font-bold  ",
                                    children: Object(oa.jsx)("button", {
                                      className:
                                        "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                      children: "Save",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d &&
                              Object(oa.jsx)("div", {
                                className: "w-1/2",
                                children: Object(oa.jsx)("img", {
                                  src: d,
                                  className:
                                    "h-auto w-full object-cover object-center",
                                }),
                              }),
                          ],
                        }),
                        Object(oa.jsx)("div", {
                          className: "flex flex-wrap mt-5 -m-4",
                          children:
                            f &&
                            f.map(function (e) {
                              return Object(oa.jsx)(
                                "div",
                                {
                                  className: "p-4 md:w-1/3 w-full",
                                  children: Object(oa.jsxs)("div", {
                                    className:
                                      "h-full bg-white  hover:shadow-md space-y-5 shadow border border-gray-100 p-5 rounded",
                                    children: [
                                      Object(oa.jsx)("img", {
                                        src: e.image,
                                        className:
                                          "h-20 object-center object-contain w-full",
                                        alt: e.name,
                                      }),
                                      Object(oa.jsx)("div", {
                                        className: "inline-flex items-center",
                                        children: Object(oa.jsx)("span", {
                                          className:
                                            "text-base font-bold  text-primary-500",
                                          children: e.name,
                                        }),
                                      }),
                                      Object(oa.jsx)("button", {
                                        onClick: function () {
                                          return L(e._id);
                                        },
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: Object(oa.jsx)("svg", {
                                          className: "w-5 h-5 mr-1",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(oa.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1.5,
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e._id
                              );
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        Ca = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: V }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.post("/api/collaborator", e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: J, payload: i }),
                            (t.next = 16);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: q, payload: l });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Aa = function (e) {
          var t = e.history,
            a = (e.match, Object(n.useState)("")),
            r = Object(ya.a)(a, 2),
            s = r[0],
            c = r[1],
            i = Object(n.useState)(""),
            l = Object(ya.a)(i, 2),
            d = l[0],
            u = l[1],
            m = Object(n.useState)(!1),
            x = Object(ya.a)(m, 2),
            p = x[0],
            h = x[1],
            j = Object(o.b)(),
            b = Object(o.c)(function (e) {
              return e.collaboratorList;
            }),
            f = (b.loading, b.error, b.collaborator);
          console.log(f);
          var g = Object(o.c)(function (e) {
              return e.collaboratorDelete;
            }),
            v = (g.loading, g.error, g.success),
            O = Object(o.c)(function (e) {
              return e.collaboratorCreate;
            }),
            w = (O.loading, O.error, O.success),
            y = O.collaborator,
            N = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              j({ type: X }),
                N || t.push("/mbdd_admin"),
                w ||
                  (u(""),
                  c(""),
                  j(
                    (function () {
                      var e = Object(da.a)(
                        la.a.mark(function e(t) {
                          var a, n;
                          return la.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: P }),
                                      (e.next = 4),
                                      ma.a.get("/api/collaborator")
                                    );
                                  case 4:
                                    (a = e.sent),
                                      (n = a.data),
                                      t({ type: M, payload: n }),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: z,
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.message
                                            ? e.t0.response.data.message
                                            : e.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ));
            },
            [t, v, w, y, N]
          );
          var E = function (e) {
              window.confirm("Are you sure") &&
                j(
                  (function (e) {
                    return (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a, n) {
                          var r, s, o, c;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: W }),
                                      (r = n()),
                                      (s = r.userLogin.userInfo),
                                      (o = {
                                        headers: {
                                          Authorization: "Bearer ".concat(
                                            s.token
                                          ),
                                        },
                                      }),
                                      (t.next = 6),
                                      ma.a.delete(
                                        "/api/collaborator/".concat(e),
                                        o
                                      )
                                    );
                                  case 6:
                                    a({ type: Q }), (t.next = 14);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      "Not authorized, token failed" ===
                                        (c =
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message) && a(xa()),
                                      a({ type: G, payload: c });
                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e, a) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(e)
                );
            },
            S = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              h(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              u(o),
                              h(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              h(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            k = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({ name: s, image: d }),
                            j(Ca({ name: s, image: d }));
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: p
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Collaborators",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsxs)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: [
                        Object(oa.jsxs)("div", {
                          className:
                            "flex items-center justify-start space-x-10",
                          children: [
                            Object(oa.jsxs)("form", {
                              onSubmit: k,
                              className: "w-1/3",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " text-sm font-medium  text-gray-700",
                                  children: "Cover photo",
                                }),
                                Object(oa.jsx)("div", {
                                  className:
                                    "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-64 border-gray-300 border-dashed rounded-md",
                                  children: Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: d,
                                            onChange: function (e) {
                                              return u(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: S,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG, JPG, GIF up to 5MB",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-full ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "name",
                                      id: "name",
                                      value: s,
                                      onChange: function (e) {
                                        return c(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter name..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsx)("div", {
                                  className:
                                    "flex justify-start mt-2 items-center",
                                  children: Object(oa.jsx)("div", {
                                    className: "  py-1 font-bold  ",
                                    children: Object(oa.jsx)("button", {
                                      className:
                                        "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                      children: "Save",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d &&
                              Object(oa.jsx)("div", {
                                className: "w-1/2",
                                children: Object(oa.jsx)("img", {
                                  src: d,
                                  className:
                                    "h-auto w-full object-cover object-center",
                                }),
                              }),
                          ],
                        }),
                        Object(oa.jsx)("div", {
                          className: "flex flex-wrap mt-5 -m-4",
                          children:
                            f &&
                            f.map(function (e) {
                              return Object(oa.jsx)(
                                "div",
                                {
                                  className: "p-4 md:w-1/3 w-full",
                                  children: Object(oa.jsxs)("div", {
                                    className:
                                      "h-full bg-white  hover:shadow-md space-y-5 shadow border border-gray-100 p-5 rounded",
                                    children: [
                                      Object(oa.jsx)("img", {
                                        src: e.image,
                                        className:
                                          "h-20 object-center object-contain w-full",
                                        alt: e.name,
                                      }),
                                      Object(oa.jsx)("div", {
                                        className: "inline-flex items-center",
                                        children: Object(oa.jsx)("span", {
                                          className:
                                            "text-base font-bold  text-primary-500",
                                          children: e.name,
                                        }),
                                      }),
                                      Object(oa.jsx)("button", {
                                        onClick: function () {
                                          return E(e._id);
                                        },
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: Object(oa.jsx)("svg", {
                                          className: "w-5 h-5 mr-1",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(oa.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1.5,
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e._id
                              );
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        Ra = function (e) {
          var t = e.history,
            a = e.match,
            r = Object(n.useState)(""),
            s = Object(ya.a)(r, 2),
            c = s[0],
            i = s[1],
            l = Object(n.useState)(""),
            d = Object(ya.a)(l, 2),
            u = d[0],
            m = d[1],
            x = Object(n.useState)(""),
            p = Object(ya.a)(x, 2),
            h = p[0],
            j = p[1],
            b = Object(n.useState)(""),
            f = Object(ya.a)(b, 2),
            g = f[0],
            v = f[1],
            O = Object(n.useState)(!1),
            w = Object(ya.a)(O, 2),
            y = (w[0], w[1]),
            N = a.params.id,
            E = Object(o.c)(function (e) {
              return e.testimonialDetails;
            }),
            S = (E.loading, E.error, E.testimonial);
          console.log(S);
          var k = Object(o.c)(function (e) {
              return e.testimonialUpdate;
            }),
            L = (k.loading, k.error, k.success),
            T =
              (Object(o.c)(function (e) {
                return e.userLogin;
              }).userInfo,
              Object(o.b)());
          Object(n.useEffect)(
            function () {
              var e;
              L
                ? (console.log("Success Update Worked"),
                  T({ type: St }),
                  t.push("/testimonials"))
                : S.name && S._id === N
                ? (i(S.name), m(S.designation), v(S.image), j(S.description))
                : T(
                    ((e = N),
                    (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a) {
                          var n, r;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: xt }),
                                      (t.next = 4),
                                      ma.a.get("/api/testimonials/".concat(e))
                                    );
                                  case 4:
                                    (n = t.sent),
                                      (r = n.data),
                                      a({ type: pt, payload: r }),
                                      (t.next = 12);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      a({
                                        type: ht,
                                        payload:
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })())
                  );
            },
            [T, t, N, S, L]
          );
          var _ = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              y(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              v(o),
                              y(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              y(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            C = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              name: c,
                              designation: u,
                              image: g,
                              description: h,
                            }),
                            T(
                              Oa({
                                _id: N,
                                name: c,
                                designation: u,
                                image: g,
                                description: h,
                              })
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsxs)("div", {
            className: " bg-yellow-50 py-20",
            children: [
              Object(oa.jsxs)("div", {
                className: "py-5",
                children: [
                  Object(oa.jsx)("h1", {
                    className:
                      "text-center  md:text-3xl text-blue-dianne-500 font-semibold",
                    children: "Testimonial",
                  }),
                  Object(oa.jsx)("div", {
                    className: "h-px max-w-md my-2 bg-blue-dianne-300 mx-auto",
                  }),
                ],
              }),
              Object(oa.jsx)("div", {
                className: "max-w-4xl mx-auto px-10 bg-white shadow py-10",
                children: Object(oa.jsx)("div", {
                  children: Object(oa.jsx)("div", {
                    className: "md:max-w-4xl  mx-auto ",
                    children: Object(oa.jsx)("div", {
                      className: "mt-5 md:mt-5 md:col-span-2",
                      children: Object(oa.jsx)("form", {
                        onSubmit: C,
                        children: Object(oa.jsxs)("div", {
                          className: " sm:rounded-md ",
                          children: [
                            Object(oa.jsxs)("div", {
                              className:
                                " flex items-start space-x-10 justify-between",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className:
                                    " mb-4 md:w-1/2 flex flex-col space-y-3 justify-between items-start",
                                  children: [
                                    Object(oa.jsxs)("div", {
                                      className: "rounded-md w-full ",
                                      children: [
                                        Object(oa.jsx)("label", {
                                          className:
                                            " mb-4 text-sm font-medium text-gray-700",
                                          children: "Name",
                                        }),
                                        Object(oa.jsx)("input", {
                                          type: "text",
                                          name: "name",
                                          id: "name",
                                          value: c,
                                          onChange: function (e) {
                                            return i(e.target.value);
                                          },
                                          className:
                                            "appearance-none relative  w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-400 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base",
                                          placeholder: "Please enter name..",
                                        }),
                                      ],
                                    }),
                                    Object(oa.jsxs)("div", {
                                      className: "rounded-md w-full ",
                                      children: [
                                        Object(oa.jsx)("label", {
                                          className:
                                            " mb-4 text-sm font-medium text-gray-700",
                                          children: "Designation",
                                        }),
                                        Object(oa.jsx)("input", {
                                          type: "text",
                                          name: "designation",
                                          id: "designation",
                                          value: u,
                                          onChange: function (e) {
                                            return m(e.target.value);
                                          },
                                          className:
                                            "appearance-none relative block w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-400 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base",
                                          placeholder:
                                            "Please enter designation..",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(oa.jsx)("div", {
                                  className: "md:w-1/2",
                                  children: g
                                    ? Object(oa.jsxs)("div", {
                                        className:
                                          " block h-40 bg-gray-100 rounded-lg relative",
                                        children: [
                                          Object(oa.jsx)("button", {
                                            onClick: function () {
                                              return v("");
                                            },
                                            className:
                                              "flex items-center bg-white px-3 py-1 absolute top-0 right-0 text-md font-medium leading-6 text-center text-blue-dianne-500 text-sm transition border border-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none",
                                            children: Object(oa.jsx)("svg", {
                                              className: "w-5 h-5 mr-1",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: Object(oa.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                              }),
                                            }),
                                          }),
                                          Object(oa.jsx)("div", {
                                            className: "h-40",
                                            children: Object(oa.jsx)("img", {
                                              src: g,
                                              className:
                                                " object-cover h-40 w-auto mx-auto object-center",
                                            }),
                                          }),
                                        ],
                                      })
                                    : Object(oa.jsxs)("div", {
                                        children: [
                                          Object(oa.jsx)("label", {
                                            className:
                                              " text-sm font-medium  text-gray-700",
                                            children: "Cover photo",
                                          }),
                                          Object(oa.jsx)("div", {
                                            className:
                                              "flex justify-center  px-6 pt-5 pb-6 border-2 bg-white border-gray-300 border-dashed rounded-md",
                                            children: Object(oa.jsxs)("div", {
                                              className:
                                                "space-y-1 text-center",
                                              children: [
                                                Object(oa.jsx)("svg", {
                                                  className:
                                                    "mx-auto h-12 w-12 text-gray-400",
                                                  stroke: "currentColor",
                                                  fill: "none",
                                                  viewBox: "0 0 48 48",
                                                  "aria-hidden": "true",
                                                  children: Object(oa.jsx)(
                                                    "path",
                                                    {
                                                      d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                                      strokeWidth: 2,
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                    }
                                                  ),
                                                }),
                                                Object(oa.jsxs)("div", {
                                                  className:
                                                    "flex text-sm text-gray-600",
                                                  children: [
                                                    Object(oa.jsx)("input", {
                                                      type: "text",
                                                      placeholder:
                                                        "Enter image url",
                                                      value: g,
                                                      onChange: function (e) {
                                                        return v(
                                                          e.target.value
                                                        );
                                                      },
                                                      className: "sr-only",
                                                    }),
                                                    Object(oa.jsxs)("label", {
                                                      htmlFor: "file-upload",
                                                      className:
                                                        "relative cursor-pointer bg-white rounded-md font-medium text-blue-dianne-500 hover:text-blue-dianne-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-dianne-500",
                                                      children: [
                                                        Object(oa.jsx)("span", {
                                                          children:
                                                            "Upload a file",
                                                        }),
                                                        Object(oa.jsx)(
                                                          "input",
                                                          {
                                                            id: "file-upload",
                                                            name: "file-upload",
                                                            type: "file",
                                                            onChange: _,
                                                            className:
                                                              "sr-only",
                                                          }
                                                        ),
                                                      ],
                                                    }),
                                                    Object(oa.jsx)("p", {
                                                      className: "pl-1",
                                                      children:
                                                        "or drag and drop",
                                                    }),
                                                  ],
                                                }),
                                                Object(oa.jsx)("p", {
                                                  className:
                                                    "text-xs text-gray-500",
                                                  children:
                                                    "PNG, JPG, GIF up to 5MB",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "rounded-md ",
                              children: Object(oa.jsxs)("div", {
                                className: "rounded-md mb-4",
                                children: [
                                  Object(oa.jsx)("label", {
                                    className:
                                      "block pb-2 text-sm font-medium text-gray-700",
                                    children: "Description",
                                  }),
                                  Object(oa.jsx)("textarea", {
                                    name: "about",
                                    rows: 5,
                                    value: h,
                                    onChange: function (e) {
                                      return j(e.target.value);
                                    },
                                    className:
                                      "appearance-none relative block w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-400 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base",
                                    placeholder: "Please enter description...",
                                  }),
                                ],
                              }),
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                " py-1 font-bold flex items-end justify-end ",
                              children: Object(oa.jsx)("button", {
                                className:
                                  "flex items-center px-5 py-2 text-base font-medium leading-6 text-center text-white transition bg-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none",
                                children: "Save",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        Ia = function () {
          return Object(oa.jsx)("div", {
            className: " bg-yellow-50",
            children: Object(oa.jsxs)("div", {
              className: "max-w-5xl mx-auto px-5 bg-white shadow-lg py-24",
              children: [
                Object(oa.jsxs)("div", {
                  className: "",
                  children: [
                    Object(oa.jsx)("h1", {
                      className:
                        "text-center  md:text-2xl text-black font-semibold",
                      children: "Career",
                    }),
                    Object(oa.jsx)("div", {
                      className: "h-0.5 w-24 my-2 bg-yellow-500 mx-auto",
                    }),
                  ],
                }),
                Object(oa.jsx)("div", {
                  children: Object(oa.jsx)(ra.b, {
                    to: "/career/create",
                    className: "block  py-1 font-bold  ",
                    children: Object(oa.jsxs)("button", {
                      className:
                        "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-brand rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none",
                      children: [
                        Object(oa.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6 pr-1",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: Object(oa.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                          }),
                        }),
                        "New",
                      ],
                    }),
                  }),
                }),
                Object(oa.jsxs)("div", {
                  className: "flex flex-wrap mt-5 -m-4",
                  children: [
                    Object(oa.jsx)("div", {
                      className: "p-4 md:w-1/3 w-full",
                      children: Object(oa.jsxs)("div", {
                        className:
                          "h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded",
                        children: [
                          Object(oa.jsx)("h1", {
                            className: "text-xl font-semibold",
                            children: "Title",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading-relaxed",
                            children: "Designation ",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading mb-6",
                            children:
                              "lorem ipsum dolear this is the this is demo paragraog of the  lorem. ",
                          }),
                          Object(oa.jsxs)("div", {
                            className: "flex flex-wrap mt-3",
                            children: [
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold mr-2 ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                    }),
                                  }),
                                }),
                              }),
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(oa.jsx)("div", {
                      className: "p-4 md:w-1/3 w-full",
                      children: Object(oa.jsxs)("div", {
                        className:
                          "h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded",
                        children: [
                          Object(oa.jsx)("h1", {
                            className: "text-xl font-semibold",
                            children: "Title",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading-relaxed",
                            children: "Designation ",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading mb-6",
                            children:
                              "lorem ipsum dolear this is the this is demo paragraog of the  lorem. ",
                          }),
                          Object(oa.jsxs)("div", {
                            className: "flex flex-wrap mt-3",
                            children: [
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold mr-2 ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                    }),
                                  }),
                                }),
                              }),
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(oa.jsx)("div", {
                      className: "p-4 md:w-1/3 w-full",
                      children: Object(oa.jsxs)("div", {
                        className:
                          "h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded",
                        children: [
                          Object(oa.jsx)("h1", {
                            className: "text-xl font-semibold",
                            children: "Title",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading-relaxed",
                            children: "Designation ",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading mb-6",
                            children:
                              "lorem ipsum dolear this is the this is demo paragraog of the  lorem. ",
                          }),
                          Object(oa.jsxs)("div", {
                            className: "flex flex-wrap mt-3",
                            children: [
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold mr-2 ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                    }),
                                  }),
                                }),
                              }),
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(oa.jsx)("div", {
                      className: "p-4 md:w-1/3 w-full",
                      children: Object(oa.jsxs)("div", {
                        className:
                          "h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded",
                        children: [
                          Object(oa.jsx)("h1", {
                            className: "text-xl font-semibold",
                            children: "Title",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading-relaxed",
                            children: "Designation ",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading mb-6",
                            children:
                              "lorem ipsum dolear this is the this is demo paragraog of the  lorem. ",
                          }),
                          Object(oa.jsxs)("div", {
                            className: "flex flex-wrap mt-3",
                            children: [
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold mr-2 ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                    }),
                                  }),
                                }),
                              }),
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(oa.jsx)("div", {
                      className: "p-4 md:w-1/3 w-full",
                      children: Object(oa.jsxs)("div", {
                        className:
                          "h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded",
                        children: [
                          Object(oa.jsx)("h1", {
                            className: "text-xl font-semibold",
                            children: "Title",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading-relaxed",
                            children: "Designation ",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading mb-6",
                            children:
                              "lorem ipsum dolear this is the this is demo paragraog of the  lorem. ",
                          }),
                          Object(oa.jsxs)("div", {
                            className: "flex flex-wrap mt-3",
                            children: [
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold mr-2 ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                    }),
                                  }),
                                }),
                              }),
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(oa.jsx)("div", {
                      className: "p-4 md:w-1/3 w-full",
                      children: Object(oa.jsxs)("div", {
                        className:
                          "h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded",
                        children: [
                          Object(oa.jsx)("h1", {
                            className: "text-xl font-semibold",
                            children: "Title",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading-relaxed",
                            children: "Designation ",
                          }),
                          Object(oa.jsx)("p", {
                            className: "leading mb-6",
                            children:
                              "lorem ipsum dolear this is the this is demo paragraog of the  lorem. ",
                          }),
                          Object(oa.jsxs)("div", {
                            className: "flex flex-wrap mt-3",
                            children: [
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold mr-2 ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                    }),
                                  }),
                                }),
                              }),
                              Object(oa.jsx)(ra.b, {
                                className: "block  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",
                                  children: Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: Object(oa.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Da = function () {
          return Object(oa.jsx)("div", {
            className: " bg-yellow-50",
            children: Object(oa.jsxs)("div", {
              className: "max-w-5xl mx-auto px-5 bg-white shadow-lg py-24",
              children: [
                Object(oa.jsxs)("div", {
                  className: "",
                  children: [
                    Object(oa.jsx)("h1", {
                      className:
                        "text-center  md:text-2xl text-black font-semibold",
                      children: "Career/create",
                    }),
                    Object(oa.jsx)("div", {
                      className: "h-0.5 w-24 my-2 bg-yellow-500 mx-auto",
                    }),
                  ],
                }),
                Object(oa.jsx)("div", {
                  children: Object(oa.jsx)("div", {
                    className: "md:max-w-4xl shadow-md  mx-auto ",
                    children: Object(oa.jsx)("div", {
                      className: "mt-5 md:mt-5 md:col-span-2",
                      children: Object(oa.jsx)("form", {
                        action: "#",
                        className: "bg-yellow-50",
                        method: "POST",
                        children: Object(oa.jsxs)("div", {
                          className: "shadow sm:rounded-md  sm:overflow-hidden",
                          children: [
                            Object(oa.jsxs)("div", {
                              className: "px-4 py-5  space-y-6 sm:p-6",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md shadow-sm",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        "block pb-3 text-sm font-medium text-gray-700",
                                      children: "Title",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "company_website",
                                      id: "company_website",
                                      className:
                                        " flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300",
                                      placeholder: "Please enter title..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md shadow-sm",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        "block pb-3 text-sm font-medium text-gray-700",
                                      children: "Designation",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "company_website",
                                      id: "company_website",
                                      className:
                                        " flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300",
                                      placeholder: "Please enter Designation..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md shadow-sm",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        "block pb-3 text-sm font-medium text-gray-700",
                                      children: "Location",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "company_website",
                                      id: "company_website",
                                      className:
                                        " flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300",
                                      placeholder: "Please enter location..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md shadow-sm",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        "block pb-3 text-sm font-medium text-gray-700",
                                      children: "Qualification",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "company_website",
                                      id: "company_website",
                                      className:
                                        " flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300",
                                      placeholder:
                                        "Please enter Qualification..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md shadow-sm",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        "block pb-3 text-sm font-medium text-gray-700",
                                      children: "Experience",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "company_website",
                                      id: "company_website",
                                      className:
                                        " flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300",
                                      placeholder: "Please enter Experience..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md shadow-sm",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        "block pb-3 text-sm font-medium text-gray-700",
                                      children: "Description",
                                    }),
                                    Object(oa.jsx)("textarea", {
                                      name: "about",
                                      rows: 5,
                                      className:
                                        "shadow-sm mt-1 block w-full p-3 sm:text-sm border border-gray-300 rounded-md",
                                      placeholder:
                                        "Please enter description...",
                                    }),
                                  ],
                                }),
                                Object(oa.jsx)("div", {}),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "px-4 py-3 mb-3 bg-yellow-50 text-left sm:px-6",
                              children: Object(oa.jsx)("button", {
                                type: "submit",
                                className:
                                  "inline-flex justify-center py-1 text-lg px-5 border border-transparent shadow-sm  font-medium rounded-md text-white bg-brand hover:bg-yellow-600 ",
                                children: "Save",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Ua = a(39),
        Pa = function (e) {
          var t = e.location,
            a = e.history,
            r = Object(n.useState)(""),
            s = Object(ya.a)(r, 2),
            c = s[0],
            i = s[1],
            l = Object(n.useState)(""),
            d = Object(ya.a)(l, 2),
            u = d[0],
            m = d[1],
            x = Object(o.b)(),
            p = Object(o.c)(function (e) {
              return e.userLogin;
            }),
            h = (p.loading, p.error, p.userInfo),
            j = t.search ? t.search.split("=")[1] : "/";
          Object(n.useEffect)(
            function () {
              h && a.push("/dashboard");
            },
            [a, h, j]
          );
          return Object(oa.jsx)("div", {
            className:
              " flex items-center bg-center bg-cover justify-center py-20 h-screen px-4  sm:px-6 lg:px-8",
            style: { backgroundImage: "url(slide1.jpg)" },
            children: Object(oa.jsxs)("div", {
              className: "max-w-md w-full md:p-10 shadow bg-white  space-y-8",
              children: [
                Object(oa.jsxs)("div", {
                  children: [
                    Object(oa.jsx)(ha.c, {
                      className:
                        "h-16 w-16 mx-auto text-primary-500 group-hover:text-primary-400",
                      "aria-hidden": "true",
                    }),
                    Object(oa.jsx)("h2", {
                      className:
                        "mt-6 text-center text-2xl font-semibold  capitalize text-primary-900",
                      children: "Sign in to your account",
                    }),
                  ],
                }),
                Object(oa.jsxs)("form", {
                  className: "mt-8 space-y-6",
                  onSubmit: function (e) {
                    e.preventDefault(),
                      x(
                        (function (e, t) {
                          return (function () {
                            var a = Object(da.a)(
                              la.a.mark(function a(n) {
                                var r, s, o;
                                return la.a.wrap(
                                  function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return (
                                            (a.prev = 0),
                                            n({ type: kt }),
                                            (r = {
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                            }),
                                            (a.next = 5),
                                            ma.a.post(
                                              "/api/users/login",
                                              { email: e, password: t },
                                              r
                                            )
                                          );
                                        case 5:
                                          (s = a.sent),
                                            (o = s.data),
                                            n({ type: Lt, payload: o }),
                                            localStorage.setItem(
                                              "userInfo",
                                              JSON.stringify(o)
                                            ),
                                            (a.next = 14);
                                          break;
                                        case 11:
                                          (a.prev = 11),
                                            (a.t0 = a.catch(0)),
                                            n({
                                              type: Tt,
                                              payload:
                                                a.t0.response &&
                                                a.t0.response.data.message
                                                  ? a.t0.response.data.message
                                                  : a.t0.message,
                                            });
                                        case 14:
                                        case "end":
                                          return a.stop();
                                      }
                                  },
                                  a,
                                  null,
                                  [[0, 11]]
                                );
                              })
                            );
                            return function (e) {
                              return a.apply(this, arguments);
                            };
                          })();
                        })(c, u)
                      );
                  },
                  children: [
                    Object(oa.jsx)("input", {
                      type: "hidden",
                      name: "remember",
                      defaultValue: "true",
                    }),
                    Object(oa.jsxs)("div", {
                      className: "rounded-md shadow-sm space-y-5",
                      children: [
                        Object(oa.jsxs)("div", {
                          children: [
                            Object(oa.jsx)("label", {
                              htmlFor: "email-address",
                              className: "sr-only",
                              children: "Email address",
                            }),
                            Object(oa.jsx)("input", {
                              type: "email",
                              placeholder: "Enter email",
                              value: c,
                              onChange: function (e) {
                                return i(e.target.value);
                              },
                              required: !0,
                              className:
                                "appearance-none relative block w-full px-3 py-3 border border-primary-300 placeholder-primary-500 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                            }),
                          ],
                        }),
                        Object(oa.jsxs)("div", {
                          children: [
                            Object(oa.jsx)("label", {
                              htmlFor: "password",
                              className: "sr-only",
                              children: "Password",
                            }),
                            Object(oa.jsx)("input", {
                              type: "password",
                              value: u,
                              onChange: function (e) {
                                return m(e.target.value);
                              },
                              required: !0,
                              className:
                                "appearance-none relative block w-full px-3 py-3 border border-primary-300 placeholder-primary-500 text-primary-900 rounded-md focus:outline-none focus:ring-primary-500 focus:ring-2 transition duration-200 focus:ring-offset-2 focus:z-10 sm:text-base",
                              placeholder: "Password",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "flex items-center justify-between",
                      children: Object(oa.jsx)("div", {
                        className: "text-base",
                        children: Object(oa.jsx)(ra.b, {
                          to: "/forgotpassword",
                          className:
                            "font-medium text-primary-600 hover:text-primary-500",
                          children: "Forgot your password?",
                        }),
                      }),
                    }),
                    Object(oa.jsx)("div", {
                      children: Object(oa.jsxs)("button", {
                        type: "submit",
                        className:
                          "group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                        children: [
                          Object(oa.jsx)("span", {
                            className:
                              "absolute left-0 inset-y-0 flex items-center pl-3",
                            children: Object(oa.jsx)(Ua.a, {
                              className:
                                "h-5 w-5 text-primary-500 group-hover:text-primary-400",
                              "aria-hidden": "true",
                            }),
                          }),
                          "Sign in",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ma = function () {
          var e = Object(n.useState)(""),
            t = Object(ya.a)(e, 2),
            a = t[0],
            r = t[1],
            s = Object(n.useState)(""),
            o = Object(ya.a)(s, 2),
            c = o[0],
            i = o[1],
            l = Object(n.useState)(""),
            d = Object(ya.a)(l, 2),
            u = d[0],
            m = d[1],
            x = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var n, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (n = {
                                header: { "Content-Type": "application/json" },
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              ma.a.post(
                                "/api/users/forgotpassword",
                                { email: a },
                                n
                              )
                            );
                          case 5:
                            (s = e.sent),
                              (o = s.data),
                              m(o.data),
                              (e.next = 15);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              i(e.t0.response.data.error),
                              r(""),
                              setTimeout(function () {
                                i("");
                              }, 5e3);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(n.useEffect)(
              function () {
                setTimeout(function () {
                  m("");
                }, 3e3);
              },
              [u]
            ),
            Object(oa.jsx)("div", {
              className: " bg-yellow-50 py-40",
              children: Object(oa.jsx)("div", {
                className: " bg-white lg:w-1/3 mx-auto  shadow",
                children: Object(oa.jsxs)("div", {
                  className: "p-10",
                  children: [
                    Object(oa.jsx)("h2", {
                      className:
                        "text-2xl mb-5 font-semibold text-blue-dianne-500 text-center",
                      children: "Forgot Password",
                    }),
                    Object(oa.jsxs)("p", {
                      className: "pb-5 text-center text-blue-dianne-500",
                      children: [
                        " ",
                        "Please enter the email address you registered your account with. We will send you reset password confirmation to this email",
                      ],
                    }),
                    Object(oa.jsx)("form", {
                      onSubmit: x,
                      className: "",
                      children: Object(oa.jsxs)("div", {
                        className: "space-y-5",
                        children: [
                          Object(oa.jsx)("input", {
                            type: "email",
                            required: !0,
                            id: "email",
                            placeholder: "Email address",
                            value: a,
                            onChange: function (e) {
                              return r(e.target.value);
                            },
                            className:
                              "appearance-none relative block w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-500 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-blue-dianne-500 focus:ring-2 transition duration-200 focus:ring-offset-2 focus:z-10 sm:text-base",
                          }),
                          c &&
                            Object(oa.jsx)("div", {
                              className: "alert mt-2  alert-error",
                              children: Object(oa.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                  Object(oa.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    className: "w-6 h-6 mx-2 stroke-current",
                                    children: Object(oa.jsx)("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                                    }),
                                  }),
                                  Object(oa.jsx)("label", { children: c }),
                                ],
                              }),
                            }),
                          u &&
                            Object(oa.jsx)("div", {
                              className: "alert mt-2  bg-green-100 rounded-lg ",
                              children: Object(oa.jsxs)("div", {
                                className:
                                  "flex-1 flex items-center justify-start space-x-3 py-3",
                                children: [
                                  Object(oa.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className:
                                      "w-6 h-6 mx-2 stroke-current feather feather-check-circle",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    children: [
                                      Object(oa.jsx)("path", {
                                        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                                      }),
                                      Object(oa.jsx)("polyline", {
                                        points: "22 4 12 14.01 9 11.01",
                                      }),
                                    ],
                                  }),
                                  Object(oa.jsx)("label", { children: u }),
                                ],
                              }),
                            }),
                          Object(oa.jsx)("button", {
                            type: "submit",
                            className:
                              "group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-dianne-600 hover:bg-blue-dianne-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dianne-500",
                            children: "Send Email",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        za = function (e) {
          e.history;
          var t = e.match,
            a = Object(n.useState)(""),
            r = Object(ya.a)(a, 2),
            s = r[0],
            o = r[1],
            c = Object(n.useState)(""),
            i = Object(ya.a)(c, 2),
            l = i[0],
            d = i[1],
            u = Object(n.useState)(""),
            m = Object(ya.a)(u, 2),
            x = m[0],
            p = m[1],
            h = Object(n.useState)(""),
            j = Object(ya.a)(h, 2),
            b = j[0],
            f = j[1],
            g = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(a) {
                  var n, r, c;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (a.preventDefault(),
                              (n = {
                                header: { "Content-Type": "application/json" },
                              }),
                              s === l)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              o(""),
                              d(""),
                              setTimeout(function () {
                                p("");
                              }, 5e3),
                              e.abrupt("return", p("Passwords don't match"))
                            );
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.next = 10),
                              ma.a.put(
                                "/api/users/resetpassword/".concat(
                                  t.params.resetToken
                                ),
                                { password: s },
                                n
                              )
                            );
                          case 10:
                            (r = e.sent),
                              (c = r.data),
                              console.log(c),
                              f(c.data),
                              (e.next = 20);
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(7)),
                              p(e.t0.response.data.error),
                              setTimeout(function () {
                                p("");
                              }, 5e3);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[7, 16]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: "h-screen flex items-center justify-center bg-yellow-50",
            children: Object(oa.jsx)("div", {
              className: "max-w-md w-full md:p-10 shadow bg-white  space-y-8",
              children: Object(oa.jsxs)("div", {
                className: "card-body",
                children: [
                  Object(oa.jsx)("h2", {
                    className:
                      "mb-5 text-center text-2xl font-semibold  capitalize text-blue-dianne-900",
                    children: "Forgot Password",
                  }),
                  Object(oa.jsxs)("p", {
                    className: "text-center  leading-6",
                    children: [
                      " ",
                      "Please enter the email address you registered your account with. We will send you reset password confirmation to this email",
                    ],
                  }),
                  Object(oa.jsx)("form", {
                    onSubmit: g,
                    className: "",
                    children: Object(oa.jsxs)("div", {
                      className: "form-control space-y-3 mt-5",
                      children: [
                        Object(oa.jsx)("div", {
                          className: "form-control",
                          children: Object(oa.jsx)("input", {
                            type: "password",
                            required: !0,
                            id: "password",
                            placeholder: "Enter new password",
                            autoComplete: "true",
                            value: s,
                            onChange: function (e) {
                              return o(e.target.value);
                            },
                            className:
                              "appearance-none relative block w-full px-3 py-3 border bg-gray-50 border-blue-dianne-300 placeholder-blue-dianne-500 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base",
                          }),
                        }),
                        Object(oa.jsx)("div", {
                          className: "form-control",
                          children: Object(oa.jsx)("input", {
                            type: "password",
                            required: !0,
                            id: "confirmpassword",
                            placeholder: "Confirm new password",
                            autoComplete: "true",
                            value: l,
                            onChange: function (e) {
                              return d(e.target.value);
                            },
                            className:
                              "appearance-none relative block w-full px-3 py-3 bg-gray-50 border border-blue-dianne-300 placeholder-blue-dianne-500 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base",
                          }),
                        }),
                        x &&
                          Object(oa.jsx)("div", {
                            className: "alert mt-2  alert-error",
                            children: Object(oa.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                Object(oa.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  className: "w-6 h-6 mx-2 stroke-current",
                                  children: Object(oa.jsx)("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                                  }),
                                }),
                                Object(oa.jsx)("label", { children: x }),
                              ],
                            }),
                          }),
                        b &&
                          Object(oa.jsx)("div", {
                            className:
                              "alert mt-2  bg-green-100 rounded-lg text-green-600 ",
                            children: Object(oa.jsxs)("div", {
                              className:
                                "flex-1 flex items-center justify-start space-x-3 py-3",
                              children: [
                                Object(oa.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className:
                                    "w-6 h-6 mx-2 stroke-current feather feather-check-circle",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  children: [
                                    Object(oa.jsx)("path", {
                                      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                                    }),
                                    Object(oa.jsx)("polyline", {
                                      points: "22 4 12 14.01 9 11.01",
                                    }),
                                  ],
                                }),
                                Object(oa.jsx)("label", { children: b }),
                                " ",
                                Object(oa.jsx)(ra.b, {
                                  to: "/",
                                  className: "text-green-700 font-semibold",
                                  children: "Login",
                                }),
                              ],
                            }),
                          }),
                        Object(oa.jsx)("button", {
                          type: "submit",
                          className:
                            "group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-dianne-600 hover:bg-blue-dianne-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dianne-500",
                          children: "Reset Password",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Ba = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: se }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.post("/api/hero", e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: oe, payload: i }),
                            (t.next = 16);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: ce, payload: l });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Fa = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: le }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.put("/api/hero/".concat(e._id), e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: de, payload: i }),
                            a({ type: ee, payload: i }),
                            (t.next = 17);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: ue, payload: l });
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Ha = function (e) {
          var t = e.history,
            a = Object(o.b)(),
            r = Object(o.c)(function (e) {
              return e.heroList;
            }),
            s = (r.loading, r.error, r.heros);
          console.log(s);
          var c = Object(o.c)(function (e) {
              return e.heroDelete;
            }),
            i = (c.loading, c.error, c.success),
            l = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              a(
                (function () {
                  var e = Object(da.a)(
                    la.a.mark(function e(t) {
                      var a, n;
                      return la.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: K }),
                                  (e.next = 4),
                                  ma.a.get("/api/hero")
                                );
                              case 4:
                                (a = e.sent),
                                  (n = a.data),
                                  t({ type: Y, payload: n }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: Z,
                                    payload:
                                      e.t0.response &&
                                      e.t0.response.data.message
                                        ? e.t0.response.data.message
                                        : e.t0.message,
                                  });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [t, i, l]
          );
          var d = function (e) {
            window.confirm("Are you sure") &&
              a(
                (function (e) {
                  return (function () {
                    var t = Object(da.a)(
                      la.a.mark(function t(a, n) {
                        var r, s, o, c;
                        return la.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: ae }),
                                    (r = n()),
                                    (s = r.userLogin.userInfo),
                                    (o = {
                                      headers: {
                                        Authorization: "Bearer ".concat(
                                          s.token
                                        ),
                                      },
                                    }),
                                    (t.next = 6),
                                    ma.a.delete("/api/hero/".concat(e), o)
                                  );
                                case 6:
                                  a({ type: ne }), (t.next = 14);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    "Not authorized, token failed" ===
                                      (c =
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message) && a(xa()),
                                    a({ type: re, payload: c });
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e, a) {
                      return t.apply(this, arguments);
                    };
                  })();
                })(e)
              );
          };
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: Object(oa.jsxs)("div", {
              children: [
                Object(oa.jsxs)("div", {
                  className: "py-5",
                  children: [
                    Object(oa.jsx)("h1", {
                      className:
                        "text-center  md:text-3xl text-primary font-semibold",
                      children: "Cover Slider",
                    }),
                    Object(oa.jsx)("div", {
                      className: "h-px max-w-md my-2 bg-primary-300 mx-auto",
                    }),
                  ],
                }),
                Object(oa.jsxs)("div", {
                  className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "flex justify-start items-center",
                      children: [
                        Object(oa.jsx)("div", {
                          className: "  py-1 font-bold  ",
                          children: Object(oa.jsxs)(ra.b, {
                            to: "/homeSlider/create",
                            className:
                              "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                            children: [
                              Object(oa.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 ",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: Object(oa.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                                }),
                              }),
                              "New",
                            ],
                          }),
                        }),
                        Object(oa.jsx)("div", {
                          className: "h-px w-full my-2 bg-primary-200",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "flex flex-wrap mt-5 -m-4",
                      children:
                        s &&
                        s.map(function (e) {
                          return Object(oa.jsx)(
                            "div",
                            {
                              className: "p-4 md:w-1/2 w-full",
                              children: Object(oa.jsxs)("div", {
                                className:
                                  "h-full bg-white  hover:shadow-md shadow border border-gray-100 p-5 rounded",
                                children: [
                                  Object(oa.jsx)("img", {
                                    src: e.image,
                                    className:
                                      "h-40 object-center object-cover w-full",
                                    alt: e.name,
                                  }),
                                  Object(oa.jsxs)("div", {
                                    className: "my-3",
                                    children: [
                                      Object(oa.jsx)("h1", {
                                        className:
                                          "text-primary-500 font-bold text-base",
                                        children: e.heading,
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-base",
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                  Object(oa.jsxs)("div", {
                                    className:
                                      "flex items-center justify-end space-x-3",
                                    children: [
                                      Object(oa.jsx)("button", {
                                        onClick: function () {
                                          return d(e._id);
                                        },
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: Object(oa.jsx)("svg", {
                                          className: "w-5 h-5 mr-1",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(oa.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1.5,
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                          }),
                                        }),
                                      }),
                                      Object(oa.jsx)(ra.b, {
                                        to: "/homeSlider/".concat(
                                          e._id,
                                          "/edit"
                                        ),
                                        className:
                                          "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                        children: Object(oa.jsx)(ha.a, {
                                          className: "h-5 w-5 mr-1",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e._id
                          );
                        }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Wa = function (e) {
          var t = e.history,
            a = (e.match, Object(n.useState)("")),
            r = Object(ya.a)(a, 2),
            s = r[0],
            c = r[1],
            i = Object(n.useState)(""),
            l = Object(ya.a)(i, 2),
            d = l[0],
            u = l[1],
            m = Object(n.useState)(""),
            x = Object(ya.a)(m, 2),
            p = x[0],
            h = x[1],
            j = Object(n.useState)(!1),
            b = Object(ya.a)(j, 2),
            f = b[0],
            g = b[1],
            v = Object(o.b)(),
            O = Object(o.c)(function (e) {
              return e.heroCreate;
            }),
            w = (O.loading, O.error, O.success),
            y = O.hero,
            N = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              N || t.push("/mbdd_admin"),
                w ? t.push("/homeSlider") : (h(""), u(""));
            },
            [t, w, y, N]
          );
          var E = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              g(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              h(o),
                              g(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              g(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            S = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              heading: s,
                              description: d,
                              image: p,
                            }),
                            v(Ba({ heading: s, description: d, image: p }));
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: f
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Cover Slider",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: Object(oa.jsx)("div", {
                        className: "flex items-center justify-start space-x-10",
                        children: Object(oa.jsxs)("form", {
                          onSubmit: S,
                          className: "w-full",
                          children: [
                            Object(oa.jsx)("label", {
                              className: " text-sm font-medium  text-gray-700",
                              children: "Cover photo",
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md",
                              children: p
                                ? Object(oa.jsxs)("div", {
                                    className: "h-96 w-full p-5",
                                    children: [
                                      Object(oa.jsx)("div", {
                                        className:
                                          "bg-gray-100 cursor-pointer p-2 w-8 h-8 ",
                                        onClick: function (e) {
                                          return h("");
                                        },
                                        children: Object(oa.jsx)(ha.b, {
                                          className: "h-5 w-5  mx-auto",
                                        }),
                                      }),
                                      Object(oa.jsx)("img", {
                                        src: p,
                                        className:
                                          "h-80 w-auto mx-auto object-cover object-center",
                                      }),
                                    ],
                                  })
                                : Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: p,
                                            onChange: function (e) {
                                              return h(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: E,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG & JPG to 2MB",
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Size: 1920x1080 pixels",
                                      }),
                                    ],
                                  }),
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "Heading",
                                }),
                                Object(oa.jsx)("input", {
                                  type: "text",
                                  name: "heading",
                                  id: "heading",
                                  value: s,
                                  onChange: function (e) {
                                    return c(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter heading..",
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "description",
                                }),
                                Object(oa.jsx)("textarea", {
                                  type: "text",
                                  name: "description",
                                  id: "description",
                                  value: d,
                                  onChange: function (e) {
                                    return u(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter description...",
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "flex justify-end mt-2 items-center",
                              children: Object(oa.jsx)("div", {
                                className: "  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                  children: "Save",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          });
        },
        Qa = function (e) {
          var t = e.history,
            a = e.match,
            r = Object(n.useState)(""),
            s = Object(ya.a)(r, 2),
            c = s[0],
            i = s[1],
            l = Object(n.useState)(""),
            d = Object(ya.a)(l, 2),
            u = d[0],
            m = d[1],
            x = Object(n.useState)(""),
            p = Object(ya.a)(x, 2),
            h = p[0],
            j = p[1],
            b = Object(n.useState)(!1),
            f = Object(ya.a)(b, 2),
            g = f[0],
            v = f[1],
            O = Object(o.b)(),
            w = a.params.id,
            y = Object(o.c)(function (e) {
              return e.heroDetails;
            }),
            N = (y.loading, y.error, y.hero),
            E = Object(o.c)(function (e) {
              return e.heroUpdate;
            }),
            S = (E.loading, E.error, E.success);
          Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo;
          Object(n.useEffect)(
            function () {
              var e;
              S
                ? (O({ type: me }), t.push("/homeSlider"))
                : N.heading && N._id === w
                ? (i(N.heading), m(N.description), j(N.image))
                : O(
                    ((e = w),
                    (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a) {
                          var n, r;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: $ }),
                                      (t.next = 4),
                                      ma.a.get("/api/hero/".concat(e))
                                    );
                                  case 4:
                                    (n = t.sent),
                                      (r = n.data),
                                      a({ type: ee, payload: r }),
                                      (t.next = 12);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      a({
                                        type: te,
                                        payload:
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })())
                  );
            },
            [O, t, w, N, S]
          );
          var k = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              v(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              j(o),
                              v(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              v(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            L = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              heroId: w,
                              heading: c,
                              description: u,
                              image: h,
                            }),
                            O(
                              Fa({
                                _id: w,
                                heading: c,
                                description: u,
                                image: h,
                              })
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: g
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Edit Cover Slider",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: Object(oa.jsx)("div", {
                        className: "flex items-center justify-start space-x-10",
                        children: Object(oa.jsxs)("form", {
                          onSubmit: L,
                          className: "w-full",
                          children: [
                            Object(oa.jsx)("label", {
                              className: " text-sm font-medium  text-gray-700",
                              children: "Cover photo",
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md",
                              children: h
                                ? Object(oa.jsxs)("div", {
                                    className: "h-96 w-full p-5",
                                    children: [
                                      Object(oa.jsx)("div", {
                                        className:
                                          "bg-gray-100 cursor-pointer p-2 w-8 h-8 ",
                                        onClick: function (e) {
                                          return j("");
                                        },
                                        children: Object(oa.jsx)(ha.b, {
                                          className: "h-5 w-5  mx-auto",
                                        }),
                                      }),
                                      Object(oa.jsx)("img", {
                                        src: h,
                                        className:
                                          "h-80 w-auto mx-auto object-cover object-center",
                                      }),
                                    ],
                                  })
                                : Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: h,
                                            onChange: function (e) {
                                              return j(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: k,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG & JPG to 2MB",
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Size: 1920x1080 pixels",
                                      }),
                                    ],
                                  }),
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "Heading",
                                }),
                                Object(oa.jsx)("input", {
                                  type: "text",
                                  name: "heading",
                                  id: "heading",
                                  value: c,
                                  onChange: function (e) {
                                    return i(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter heading..",
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "description",
                                }),
                                Object(oa.jsx)("textarea", {
                                  type: "text",
                                  name: "description",
                                  id: "description",
                                  value: u,
                                  onChange: function (e) {
                                    return m(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter description...",
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "flex justify-end mt-2 items-center",
                              children: Object(oa.jsx)("div", {
                                className: "  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                  children: "Save",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          });
        },
        Ga = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: we }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.post("/api/team", e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: ye, payload: i }),
                            (t.next = 16);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: Ne, payload: l });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Va = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: Se }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.put("/api/team/".concat(e._id), e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: ke, payload: i }),
                            a({ type: be, payload: i }),
                            (t.next = 17);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: Le, payload: l });
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Ja = function (e) {
          var t = e.history,
            a = Object(o.b)(),
            r = Object(o.c)(function (e) {
              return e.teamList;
            }),
            s = (r.loading, r.error, r.teams);
          console.log(s);
          var c = Object(o.c)(function (e) {
              return e.teamDelete;
            }),
            i = (c.loading, c.error, c.success),
            l = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              a(
                (function () {
                  var e = Object(da.a)(
                    la.a.mark(function e(t) {
                      var a, n;
                      return la.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: xe }),
                                  (e.next = 4),
                                  ma.a.get("/api/team")
                                );
                              case 4:
                                (a = e.sent),
                                  (n = a.data),
                                  t({ type: pe, payload: n }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: he,
                                    payload:
                                      e.t0.response &&
                                      e.t0.response.data.message
                                        ? e.t0.response.data.message
                                        : e.t0.message,
                                  });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [t, i, l]
          );
          var d = function (e) {
            window.confirm("Are you sure") &&
              a(
                (function (e) {
                  return (function () {
                    var t = Object(da.a)(
                      la.a.mark(function t(a, n) {
                        var r, s, o, c;
                        return la.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: ge }),
                                    (r = n()),
                                    (s = r.userLogin.userInfo),
                                    (o = {
                                      headers: {
                                        Authorization: "Bearer ".concat(
                                          s.token
                                        ),
                                      },
                                    }),
                                    (t.next = 6),
                                    ma.a.delete("/api/team/".concat(e), o)
                                  );
                                case 6:
                                  a({ type: ve }), (t.next = 14);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    "Not authorized, token failed" ===
                                      (c =
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message) && a(xa()),
                                    a({ type: Oe, payload: c });
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e, a) {
                      return t.apply(this, arguments);
                    };
                  })();
                })(e)
              );
          };
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: Object(oa.jsxs)("div", {
              children: [
                Object(oa.jsxs)("div", {
                  className: "py-5",
                  children: [
                    Object(oa.jsx)("h1", {
                      className:
                        "text-center  md:text-3xl text-primary font-semibold",
                      children: "Team",
                    }),
                    Object(oa.jsx)("div", {
                      className: "h-px max-w-md my-2 bg-primary-300 mx-auto",
                    }),
                  ],
                }),
                Object(oa.jsxs)("div", {
                  className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "flex justify-start items-center",
                      children: [
                        Object(oa.jsx)("div", {
                          className: "  py-1 font-bold  ",
                          children: Object(oa.jsxs)(ra.b, {
                            to: "/team/create",
                            className:
                              "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                            children: [
                              Object(oa.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 ",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: Object(oa.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                                }),
                              }),
                              "New",
                            ],
                          }),
                        }),
                        Object(oa.jsx)("div", {
                          className: "h-px w-full my-2 bg-primary-200",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className:
                        "grid gap-10 mx-auto lg:grid-cols-2 mt-5 lg:max-w-screen-lg",
                      children:
                        s &&
                        s.map(function (e) {
                          return Object(oa.jsxs)(
                            "div",
                            {
                              className: "grid sm:grid-cols-3",
                              children: [
                                Object(oa.jsx)("div", {
                                  className:
                                    "relative w-full h-48 max-h-full rounded shadow sm:h-auto",
                                  children: Object(oa.jsx)("img", {
                                    className:
                                      "absolute object-cover w-full h-full rounded",
                                    src: e.image,
                                    alt: e.name,
                                  }),
                                }),
                                Object(oa.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2",
                                  children: [
                                    Object(oa.jsx)("p", {
                                      className: "text-lg font-bold",
                                      children: e.name,
                                    }),
                                    Object(oa.jsx)("p", {
                                      className: "mb-4 text-xs text-gray-800",
                                      children: e.designation,
                                    }),
                                    Object(oa.jsx)("p", {
                                      className:
                                        "mb-4 text-sm tracking-wide text-gray-800",
                                      children: e.description,
                                    }),
                                    Object(oa.jsxs)("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        Object(oa.jsxs)("div", {
                                          className:
                                            "flex items-center space-x-3",
                                          children: [
                                            Object(oa.jsx)("a", {
                                              target: "_blank",
                                              href: e.twitterLink,
                                              className:
                                                "text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400",
                                              children: Object(oa.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "h-5",
                                                children: Object(oa.jsx)(
                                                  "path",
                                                  {
                                                    d: "M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z",
                                                  }
                                                ),
                                              }),
                                            }),
                                            Object(oa.jsx)("a", {
                                              target: "_blank",
                                              href: e.fbLink,
                                              className:
                                                "text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400",
                                              children: Object(oa.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "h-5",
                                                children: Object(oa.jsx)(
                                                  "path",
                                                  {
                                                    d: "M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z",
                                                  }
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(oa.jsxs)("div", {
                                          className:
                                            "flex items-center justify-end space-x-3",
                                          children: [
                                            Object(oa.jsx)("button", {
                                              onClick: function () {
                                                return d(e._id);
                                              },
                                              className:
                                                "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                              children: Object(oa.jsx)("svg", {
                                                className: "w-5 h-5 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: Object(oa.jsx)(
                                                  "path",
                                                  {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                  }
                                                ),
                                              }),
                                            }),
                                            Object(oa.jsx)(ra.b, {
                                              to: "/team/".concat(
                                                e._id,
                                                "/edit"
                                              ),
                                              className:
                                                "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                              children: Object(oa.jsx)(ha.a, {
                                                className: "h-5 w-5 mr-1",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e._id
                          );
                        }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        qa = function (e) {
          var t = e.history,
            a = Object(n.useState)(""),
            r = Object(ya.a)(a, 2),
            s = r[0],
            c = r[1],
            i = Object(n.useState)(""),
            l = Object(ya.a)(i, 2),
            d = l[0],
            u = l[1],
            m = Object(n.useState)(""),
            x = Object(ya.a)(m, 2),
            p = x[0],
            h = x[1],
            j = Object(n.useState)(""),
            b = Object(ya.a)(j, 2),
            f = b[0],
            g = b[1],
            v = Object(n.useState)(""),
            O = Object(ya.a)(v, 2),
            w = O[0],
            y = O[1],
            N = Object(n.useState)(""),
            E = Object(ya.a)(N, 2),
            S = E[0],
            k = E[1],
            L = Object(n.useState)(!1),
            T = Object(ya.a)(L, 2),
            _ = T[0],
            C = T[1],
            A = Object(o.b)(),
            R = Object(o.c)(function (e) {
              return e.teamCreate;
            }),
            I = (R.loading, R.error, R.success),
            D = R.team,
            U = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              U || t.push("/mbdd_admin"),
                I
                  ? t.push("/team")
                  : (c(""), u(""), h(""), g(""), y(""), k(""));
            },
            [t, I, D, U]
          );
          var P = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              C(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              k(o),
                              C(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              C(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            M = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              name: s,
                              designation: d,
                              description: p,
                              twitterLink: f,
                              fbLink: w,
                              image: S,
                            }),
                            A(
                              Ga({
                                name: s,
                                designation: d,
                                description: p,
                                twitterLink: f,
                                fbLink: w,
                                image: S,
                              })
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: _
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Create New Team Member",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: Object(oa.jsx)("div", {
                        className: "flex items-center justify-start space-x-10",
                        children: Object(oa.jsxs)("form", {
                          onSubmit: M,
                          className: "w-full",
                          children: [
                            Object(oa.jsx)("label", {
                              className: " text-sm font-medium  text-gray-700",
                              children: "Cover photo",
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md",
                              children: S
                                ? Object(oa.jsxs)("div", {
                                    className: "h-96 w-full p-5",
                                    children: [
                                      Object(oa.jsx)("div", {
                                        className:
                                          "bg-gray-100 cursor-pointer p-2 w-8 h-8 ",
                                        onClick: function (e) {
                                          return k("");
                                        },
                                        children: Object(oa.jsx)(ha.b, {
                                          className: "h-5 w-5  mx-auto",
                                        }),
                                      }),
                                      Object(oa.jsx)("img", {
                                        src: S,
                                        className:
                                          "h-80 w-auto mx-auto object-cover object-center",
                                      }),
                                    ],
                                  })
                                : Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: S,
                                            onChange: function (e) {
                                              return k(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: P,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG & JPG to 2MB",
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Size: 400x400 pixels",
                                      }),
                                    ],
                                  }),
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center mt-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: s,
                                      onChange: function (e) {
                                        return c(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Designation",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: d,
                                      onChange: function (e) {
                                        return u(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center my-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Twitter Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: f,
                                      onChange: function (e) {
                                        return g(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Facebook Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: w,
                                      onChange: function (e) {
                                        return y(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "description",
                                }),
                                Object(oa.jsx)("textarea", {
                                  type: "text",
                                  name: "description",
                                  id: "description",
                                  value: p,
                                  onChange: function (e) {
                                    return h(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter description...",
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "flex justify-end mt-2 items-center",
                              children: Object(oa.jsx)("div", {
                                className: "  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                  children: "Save",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          });
        },
        Xa = function (e) {
          var t = e.history,
            a = e.match,
            r = Object(n.useState)(""),
            s = Object(ya.a)(r, 2),
            c = s[0],
            i = s[1],
            l = Object(n.useState)(""),
            d = Object(ya.a)(l, 2),
            u = d[0],
            m = d[1],
            x = Object(n.useState)(""),
            p = Object(ya.a)(x, 2),
            h = p[0],
            j = p[1],
            b = Object(n.useState)(""),
            f = Object(ya.a)(b, 2),
            g = f[0],
            v = f[1],
            O = Object(n.useState)(""),
            w = Object(ya.a)(O, 2),
            y = w[0],
            N = w[1],
            E = Object(n.useState)(""),
            S = Object(ya.a)(E, 2),
            k = S[0],
            L = S[1],
            T = Object(n.useState)(!1),
            _ = Object(ya.a)(T, 2),
            C = _[0],
            A = _[1],
            R = Object(o.b)(),
            I = a.params.id,
            D = Object(o.c)(function (e) {
              return e.teamDetails;
            }),
            U = (D.loading, D.error, D.team),
            P = Object(o.c)(function (e) {
              return e.teamUpdate;
            }),
            M = (P.loading, P.error, P.success);
          Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo;
          Object(n.useEffect)(
            function () {
              var e;
              M
                ? (R({ type: Te }), t.push("/team"))
                : U.name && U._id === I
                ? (i(U.name),
                  m(U.designation),
                  j(U.description),
                  v(U.twitterLink),
                  N(U.fbLink),
                  L(U.image))
                : R(
                    ((e = I),
                    (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a) {
                          var n, r;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: je }),
                                      (t.next = 4),
                                      ma.a.get("/api/team/".concat(e))
                                    );
                                  case 4:
                                    (n = t.sent),
                                      (r = n.data),
                                      a({ type: be, payload: r }),
                                      (t.next = 12);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      a({
                                        type: fe,
                                        payload:
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })())
                  );
            },
            [R, t, I, U, M]
          );
          var z = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              A(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              L(o),
                              A(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              A(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            B = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              teamId: I,
                              image: k,
                              name: c,
                              designation: u,
                              description: h,
                              twitterLink: g,
                              fbLink: y,
                            }),
                            R(
                              Va({
                                _id: I,
                                name: c,
                                image: k,
                                designation: u,
                                description: h,
                                twitterLink: g,
                                fbLink: y,
                              })
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: C
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Edit Cover Slider",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: Object(oa.jsx)("div", {
                        className: "flex items-center justify-start space-x-10",
                        children: Object(oa.jsxs)("form", {
                          onSubmit: B,
                          className: "w-full",
                          children: [
                            Object(oa.jsx)("label", {
                              className: " text-sm font-medium  text-gray-700",
                              children: "Cover photo",
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md",
                              children: k
                                ? Object(oa.jsxs)("div", {
                                    className: "h-96 w-full p-5",
                                    children: [
                                      Object(oa.jsx)("div", {
                                        className:
                                          "bg-gray-100 cursor-pointer p-2 w-8 h-8 ",
                                        onClick: function (e) {
                                          return L("");
                                        },
                                        children: Object(oa.jsx)(ha.b, {
                                          className: "h-5 w-5  mx-auto",
                                        }),
                                      }),
                                      Object(oa.jsx)("img", {
                                        src: k,
                                        className:
                                          "h-80 w-auto mx-auto object-cover object-center",
                                      }),
                                    ],
                                  })
                                : Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: k,
                                            onChange: function (e) {
                                              return L(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: z,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG & JPG to 2MB",
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Size: 400X400 pixels",
                                      }),
                                    ],
                                  }),
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center mt-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: c,
                                      onChange: function (e) {
                                        return i(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Designation",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: u,
                                      onChange: function (e) {
                                        return m(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center my-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Twitter Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: g,
                                      onChange: function (e) {
                                        return v(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Facebook Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: y,
                                      onChange: function (e) {
                                        return N(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "description",
                                }),
                                Object(oa.jsx)("textarea", {
                                  type: "text",
                                  name: "description",
                                  id: "description",
                                  value: h,
                                  onChange: function (e) {
                                    return j(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter description...",
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "flex justify-end mt-2 items-center",
                              children: Object(oa.jsx)("div", {
                                className: "  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                  children: "Save",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          });
        },
        Ka = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: ze }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.post("/api/superstarDonar", e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: Be, payload: i }),
                            (t.next = 16);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: Fe, payload: l });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Ya = function (e) {
          return (function () {
            var t = Object(da.a)(
              la.a.mark(function t(a, n) {
                var r, s, o, c, i, l;
                return la.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: We }),
                            (r = n()),
                            (s = r.userLogin.userInfo),
                            (o = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(s.token),
                              },
                            }),
                            (t.next = 6),
                            ma.a.put("/api/superstarDonar/".concat(e._id), e, o)
                          );
                        case 6:
                          (c = t.sent),
                            (i = c.data),
                            a({ type: Qe, payload: i }),
                            a({ type: Ie, payload: i }),
                            (t.next = 17);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(0)),
                            "Not authorized, token failed" ===
                              (l =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && a(xa()),
                            a({ type: Ge, payload: l });
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        Za = function (e) {
          var t = e.history,
            a = Object(o.b)(),
            r = Object(o.c)(function (e) {
              return e.superstarDonarList;
            }),
            s = (r.loading, r.error, r.superstarDonars);
          console.log(s);
          var c = Object(o.c)(function (e) {
              return e.superstarDonarDelete;
            }),
            i = (c.loading, c.error, c.success),
            l = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              a(
                (function () {
                  var e = Object(da.a)(
                    la.a.mark(function e(t) {
                      var a, n;
                      return la.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: _e }),
                                  (e.next = 4),
                                  ma.a.get("/api/superstarDonar")
                                );
                              case 4:
                                (a = e.sent),
                                  (n = a.data),
                                  t({ type: Ce, payload: n }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: Ae,
                                    payload:
                                      e.t0.response &&
                                      e.t0.response.data.message
                                        ? e.t0.response.data.message
                                        : e.t0.message,
                                  });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [t, i, l]
          );
          var d = function (e) {
            window.confirm("Are you sure") &&
              a(
                (function (e) {
                  return (function () {
                    var t = Object(da.a)(
                      la.a.mark(function t(a, n) {
                        var r, s, o, c;
                        return la.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: Ue }),
                                    (r = n()),
                                    (s = r.userLogin.userInfo),
                                    (o = {
                                      headers: {
                                        Authorization: "Bearer ".concat(
                                          s.token
                                        ),
                                      },
                                    }),
                                    (t.next = 6),
                                    ma.a.delete(
                                      "/api/superstarDonar/".concat(e),
                                      o
                                    )
                                  );
                                case 6:
                                  a({ type: Pe }), (t.next = 14);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    "Not authorized, token failed" ===
                                      (c =
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message) && a(xa()),
                                    a({ type: Me, payload: c });
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e, a) {
                      return t.apply(this, arguments);
                    };
                  })();
                })(e)
              );
          };
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: Object(oa.jsxs)("div", {
              children: [
                Object(oa.jsxs)("div", {
                  className: "py-5",
                  children: [
                    Object(oa.jsx)("h1", {
                      className:
                        "text-center  md:text-3xl text-primary font-semibold",
                      children: "Superstar Donar",
                    }),
                    Object(oa.jsx)("div", {
                      className: "h-px max-w-md my-2 bg-primary-300 mx-auto",
                    }),
                  ],
                }),
                Object(oa.jsxs)("div", {
                  className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "flex justify-start items-center",
                      children: [
                        Object(oa.jsx)("div", {
                          className: "  py-1 font-bold  ",
                          children: Object(oa.jsxs)(ra.b, {
                            to: "/superstarDonor/create",
                            className:
                              "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                            children: [
                              Object(oa.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 ",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: Object(oa.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                                }),
                              }),
                              "New",
                            ],
                          }),
                        }),
                        Object(oa.jsx)("div", {
                          className: "h-px w-full my-2 bg-primary-200",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className:
                        "grid gap-10 mx-auto lg:grid-cols-2 mt-5 lg:max-w-screen-lg",
                      children:
                        s &&
                        s.map(function (e) {
                          return Object(oa.jsxs)(
                            "div",
                            {
                              className: "grid sm:grid-cols-3",
                              children: [
                                Object(oa.jsx)("div", {
                                  className:
                                    "relative w-full h-48 max-h-full rounded shadow sm:h-auto",
                                  children: Object(oa.jsx)("img", {
                                    className:
                                      "absolute object-cover w-full h-full rounded",
                                    src: e.image,
                                    alt: e.name,
                                  }),
                                }),
                                Object(oa.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2",
                                  children: [
                                    Object(oa.jsx)("p", {
                                      className: "text-lg font-bold",
                                      children: e.name,
                                    }),
                                    Object(oa.jsx)("p", {
                                      className: "mb-4 text-xs text-gray-800",
                                      children: e.designation,
                                    }),
                                    Object(oa.jsx)("p", {
                                      className:
                                        "mb-4 text-sm tracking-wide text-gray-800",
                                      children: e.description,
                                    }),
                                    Object(oa.jsxs)("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        Object(oa.jsxs)("div", {
                                          className:
                                            "flex items-center space-x-3",
                                          children: [
                                            Object(oa.jsx)("a", {
                                              target: "_blank",
                                              href: e.twitterLink,
                                              className:
                                                "text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400",
                                              children: Object(oa.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "h-5",
                                                children: Object(oa.jsx)(
                                                  "path",
                                                  {
                                                    d: "M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z",
                                                  }
                                                ),
                                              }),
                                            }),
                                            Object(oa.jsx)("a", {
                                              target: "_blank",
                                              href: e.fbLink,
                                              className:
                                                "text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400",
                                              children: Object(oa.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "h-5",
                                                children: Object(oa.jsx)(
                                                  "path",
                                                  {
                                                    d: "M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z",
                                                  }
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(oa.jsxs)("div", {
                                          className:
                                            "flex items-center justify-end space-x-3",
                                          children: [
                                            Object(oa.jsx)("button", {
                                              onClick: function () {
                                                return d(e._id);
                                              },
                                              className:
                                                "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                              children: Object(oa.jsx)("svg", {
                                                className: "w-5 h-5 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: Object(oa.jsx)(
                                                  "path",
                                                  {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                  }
                                                ),
                                              }),
                                            }),
                                            Object(oa.jsx)(ra.b, {
                                              to: "/superstarDonor/".concat(
                                                e._id,
                                                "/edit"
                                              ),
                                              className:
                                                "flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                              children: Object(oa.jsx)(ha.a, {
                                                className: "h-5 w-5 mr-1",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e._id
                          );
                        }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        $a = function (e) {
          var t = e.history,
            a = Object(n.useState)(""),
            r = Object(ya.a)(a, 2),
            s = r[0],
            c = r[1],
            i = Object(n.useState)(""),
            l = Object(ya.a)(i, 2),
            d = l[0],
            u = l[1],
            m = Object(n.useState)(""),
            x = Object(ya.a)(m, 2),
            p = x[0],
            h = x[1],
            j = Object(n.useState)(""),
            b = Object(ya.a)(j, 2),
            f = b[0],
            g = b[1],
            v = Object(n.useState)(""),
            O = Object(ya.a)(v, 2),
            w = O[0],
            y = O[1],
            N = Object(n.useState)(""),
            E = Object(ya.a)(N, 2),
            S = E[0],
            k = E[1],
            L = Object(n.useState)(!1),
            T = Object(ya.a)(L, 2),
            _ = T[0],
            C = T[1],
            A = Object(o.b)(),
            R = Object(o.c)(function (e) {
              return e.superstarDonarCreate;
            }),
            I = (R.loading, R.error, R.success),
            D = R.superstarDonar,
            U = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              U || t.push("/mbdd_admin"),
                I
                  ? t.push("/superstarDonor")
                  : (c(""), u(""), h(""), g(""), y(""), k(""));
            },
            [t, I, D, U]
          );
          var P = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              C(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              k(o),
                              C(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              C(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            M = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              name: s,
                              designation: d,
                              description: p,
                              twitterLink: f,
                              fbLink: w,
                              image: S,
                            }),
                            A(
                              Ka({
                                name: s,
                                designation: d,
                                description: p,
                                twitterLink: f,
                                fbLink: w,
                                image: S,
                              })
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: _
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Create New Superstar Donor",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: Object(oa.jsx)("div", {
                        className: "flex items-center justify-start space-x-10",
                        children: Object(oa.jsxs)("form", {
                          onSubmit: M,
                          className: "w-full",
                          children: [
                            Object(oa.jsx)("label", {
                              className: " text-sm font-medium  text-gray-700",
                              children: "Cover photo",
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md",
                              children: S
                                ? Object(oa.jsxs)("div", {
                                    className: "h-96 w-full p-5",
                                    children: [
                                      Object(oa.jsx)("div", {
                                        className:
                                          "bg-gray-100 cursor-pointer p-2 w-8 h-8 ",
                                        onClick: function (e) {
                                          return k("");
                                        },
                                        children: Object(oa.jsx)(ha.b, {
                                          className: "h-5 w-5  mx-auto",
                                        }),
                                      }),
                                      Object(oa.jsx)("img", {
                                        src: S,
                                        className:
                                          "h-80 w-auto mx-auto object-cover object-center",
                                      }),
                                    ],
                                  })
                                : Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: S,
                                            onChange: function (e) {
                                              return k(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: P,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG & JPG to 2MB",
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Size: 400x400 pixels",
                                      }),
                                    ],
                                  }),
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center mt-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: s,
                                      onChange: function (e) {
                                        return c(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Designation",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: d,
                                      onChange: function (e) {
                                        return u(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center my-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Twitter Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: f,
                                      onChange: function (e) {
                                        return g(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Facebook Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: w,
                                      onChange: function (e) {
                                        return y(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "description",
                                }),
                                Object(oa.jsx)("textarea", {
                                  type: "text",
                                  name: "description",
                                  id: "description",
                                  value: p,
                                  onChange: function (e) {
                                    return h(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter description...",
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "flex justify-end mt-2 items-center",
                              children: Object(oa.jsx)("div", {
                                className: "  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                  children: "Save",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          });
        },
        en = function (e) {
          var t = e.history,
            a = e.match,
            r = Object(n.useState)(""),
            s = Object(ya.a)(r, 2),
            c = s[0],
            i = s[1],
            l = Object(n.useState)(""),
            d = Object(ya.a)(l, 2),
            u = d[0],
            m = d[1],
            x = Object(n.useState)(""),
            p = Object(ya.a)(x, 2),
            h = p[0],
            j = p[1],
            b = Object(n.useState)(""),
            f = Object(ya.a)(b, 2),
            g = f[0],
            v = f[1],
            O = Object(n.useState)(""),
            w = Object(ya.a)(O, 2),
            y = w[0],
            N = w[1],
            E = Object(n.useState)(""),
            S = Object(ya.a)(E, 2),
            k = S[0],
            L = S[1],
            T = Object(n.useState)(!1),
            _ = Object(ya.a)(T, 2),
            C = _[0],
            A = _[1],
            R = Object(o.b)(),
            I = a.params.id,
            D = Object(o.c)(function (e) {
              return e.superstarDonarDetails;
            }),
            U = (D.loading, D.error, D.superstarDonar),
            P = Object(o.c)(function (e) {
              return e.superstarDonarUpdate;
            }),
            M = (P.loading, P.error, P.success);
          Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo;
          Object(n.useEffect)(
            function () {
              var e;
              M
                ? (R({ type: Ve }), t.push("/superstarDonor"))
                : U.name && U._id === I
                ? (i(U.name),
                  m(U.designation),
                  j(U.description),
                  v(U.twitterLink),
                  N(U.fbLink),
                  L(U.image))
                : R(
                    ((e = I),
                    (function () {
                      var t = Object(da.a)(
                        la.a.mark(function t(a) {
                          var n, r;
                          return la.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: Re }),
                                      (t.next = 4),
                                      ma.a.get("/api/superstarDonar/".concat(e))
                                    );
                                  case 4:
                                    (n = t.sent),
                                      (r = n.data),
                                      a({ type: Ie, payload: r }),
                                      (t.next = 12);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      a({
                                        type: De,
                                        payload:
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })())
                  );
            },
            [R, t, I, U, M]
          );
          var z = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  var a, n, r, s, o;
                  return la.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append("image", a),
                              A(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (e.next = 8),
                              ma.a.post("/api/upload", n, r)
                            );
                          case 8:
                            (s = e.sent),
                              (o = s.data),
                              L(o),
                              A(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              A(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            B = (function () {
              var e = Object(da.a)(
                la.a.mark(function e(t) {
                  return la.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            console.log({
                              superstarDonarId: I,
                              image: k,
                              name: c,
                              designation: u,
                              description: h,
                              twitterLink: g,
                              fbLink: y,
                            }),
                            R(
                              Ya({
                                _id: I,
                                name: c,
                                image: k,
                                designation: u,
                                description: h,
                                twitterLink: g,
                                fbLink: y,
                              })
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(oa.jsx)("div", {
            className: " bg-primary-50 py-20 min-h-screen",
            children: C
              ? Object(oa.jsx)("div", {
                  className: "fixed inset-0 bg-primary-500 bg-opacity-20",
                  children: Object(oa.jsx)(Sa, {}),
                })
              : Object(oa.jsxs)(oa.Fragment, {
                  children: [
                    Object(oa.jsxs)("div", {
                      className: "py-5",
                      children: [
                        Object(oa.jsx)("h1", {
                          className:
                            "text-center  md:text-3xl text-primary font-semibold",
                          children: "Edit Superstar Donor",
                        }),
                        Object(oa.jsx)("div", {
                          className:
                            "h-px max-w-md my-2 bg-primary-300 mx-auto",
                        }),
                      ],
                    }),
                    Object(oa.jsx)("div", {
                      className: "max-w-4xl mx-auto px-8 bg-white shadow py-16",
                      children: Object(oa.jsx)("div", {
                        className: "flex items-center justify-start space-x-10",
                        children: Object(oa.jsxs)("form", {
                          onSubmit: B,
                          className: "w-full",
                          children: [
                            Object(oa.jsx)("label", {
                              className: " text-sm font-medium  text-gray-700",
                              children: "Cover photo",
                            }),
                            Object(oa.jsx)("div", {
                              className:
                                "flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md",
                              children: k
                                ? Object(oa.jsxs)("div", {
                                    className: "h-96 w-full p-5",
                                    children: [
                                      Object(oa.jsx)("div", {
                                        className:
                                          "bg-gray-100 cursor-pointer p-2 w-8 h-8 ",
                                        onClick: function (e) {
                                          return L("");
                                        },
                                        children: Object(oa.jsx)(ha.b, {
                                          className: "h-5 w-5  mx-auto",
                                        }),
                                      }),
                                      Object(oa.jsx)("img", {
                                        src: k,
                                        className:
                                          "h-80 w-auto mx-auto object-cover object-center",
                                      }),
                                    ],
                                  })
                                : Object(oa.jsxs)("div", {
                                    className: "space-y-1 text-center",
                                    children: [
                                      Object(oa.jsx)("svg", {
                                        className:
                                          "mx-auto h-12 w-12 text-gray-400",
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 48 48",
                                        "aria-hidden": "true",
                                        children: Object(oa.jsx)("path", {
                                          d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      }),
                                      Object(oa.jsxs)("div", {
                                        className: "flex text-sm text-gray-600",
                                        children: [
                                          Object(oa.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter image url",
                                            value: k,
                                            onChange: function (e) {
                                              return L(e.target.value);
                                            },
                                            className: "sr-only",
                                          }),
                                          Object(oa.jsxs)("label", {
                                            htmlFor: "file-upload",
                                            className:
                                              "relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",
                                            children: [
                                              Object(oa.jsx)("span", {
                                                children: "Upload a file",
                                              }),
                                              Object(oa.jsx)("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                onChange: z,
                                                className: "sr-only",
                                              }),
                                            ],
                                          }),
                                          Object(oa.jsx)("p", {
                                            className: "pl-1",
                                            children: "or drag and drop",
                                          }),
                                        ],
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "PNG & JPG to 2MB",
                                      }),
                                      Object(oa.jsx)("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Size: 400X400 pixels",
                                      }),
                                    ],
                                  }),
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center mt-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Name",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: c,
                                      onChange: function (e) {
                                        return i(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Designation",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: u,
                                      onChange: function (e) {
                                        return m(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className:
                                "flex items-center my-5 justify-between space-x-10",
                              children: [
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Twitter Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: g,
                                      onChange: function (e) {
                                        return v(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                                Object(oa.jsxs)("div", {
                                  className: "rounded-md w-1/2 ",
                                  children: [
                                    Object(oa.jsx)("label", {
                                      className:
                                        " mb-4 text-sm font-medium text-gray-700",
                                      children: "Facebook Link",
                                    }),
                                    Object(oa.jsx)("input", {
                                      type: "text",
                                      name: "heading",
                                      id: "heading",
                                      value: y,
                                      onChange: function (e) {
                                        return N(e.target.value);
                                      },
                                      className:
                                        "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                      placeholder: "Please enter heading..",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(oa.jsxs)("div", {
                              className: "rounded-md w-full ",
                              children: [
                                Object(oa.jsx)("label", {
                                  className:
                                    " mb-4 text-sm font-medium text-gray-700",
                                  children: "description",
                                }),
                                Object(oa.jsx)("textarea", {
                                  type: "text",
                                  name: "description",
                                  id: "description",
                                  value: h,
                                  onChange: function (e) {
                                    return j(e.target.value);
                                  },
                                  className:
                                    "appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base",
                                  placeholder: "Please enter description...",
                                }),
                              ],
                            }),
                            Object(oa.jsx)("div", {
                              className: "flex justify-end mt-2 items-center",
                              children: Object(oa.jsx)("div", {
                                className: "  py-1 font-bold  ",
                                children: Object(oa.jsx)("button", {
                                  className:
                                    "flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none",
                                  children: "Save",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          });
        },
        tn = function () {
          return Object(oa.jsxs)(oa.Fragment, {
            children: [
              Object(oa.jsx)(pa, {}),
              Object(oa.jsx)(na.a, {
                path: "/testimonials",
                component: wa,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/testimonials/create",
                component: Ra,
              }),
              Object(oa.jsx)(na.a, {
                path: "/testimonials/:id/edit/",
                component: Ra,
              }),
              Object(oa.jsx)(na.a, {
                path: "/homeSlider",
                component: Ha,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/homeSlider/create/",
                component: Wa,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/homeSlider/:id/edit/",
                component: Qa,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, { path: "/team", component: Ja, exact: !0 }),
              Object(oa.jsx)(na.a, {
                path: "/team/create/",
                component: qa,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/team/:id/edit/",
                component: Xa,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/superstarDonor",
                component: Za,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/superstarDonor/create/",
                component: $a,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/superstarDonor/:id/edit/",
                component: en,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, {
                path: "/career",
                component: Ia,
                exact: !0,
              }),
              Object(oa.jsx)(na.a, { path: "/career/create", component: Da }),
              Object(oa.jsx)(na.a, { path: "/news", component: La }),
              Object(oa.jsx)(na.a, { path: "/partner", component: _a }),
              Object(oa.jsx)(na.a, { path: "/collaborator", component: Aa }),
              Object(oa.jsx)(na.a, { path: "/dashboard", component: va }),
              Object(oa.jsx)(ca, {}),
            ],
          });
        },
        an = function () {
          return Object(oa.jsx)(ra.a, {
            basename: "/mbdd_admin",
            children: Object(oa.jsxs)(na.c, {
              children: [
                Object(oa.jsx)(na.a, { path: "/", component: Pa, exact: !0 }),
                Object(oa.jsx)(na.a, {
                  exact: !0,
                  path: "/forgotpassword",
                  component: Ma,
                }),
                Object(oa.jsx)(na.a, {
                  exact: !0,
                  path: "/passwordreset/:resetToken",
                  component: za,
                }),
                Object(oa.jsx)(na.a, { component: tn }),
              ],
            }),
          });
        };
      s.a.render(
        Object(oa.jsx)(o.a, { store: aa, children: Object(oa.jsx)(an, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[91, 1, 2]],
]);
//# sourceMappingURL=main.feeb1cc0.chunk.js.map
