/**
 * Magic Tabs by John Liddiard (aka JohntheFish)
 * www.jlunderwater.co.uk, www.c5magic.co.uk
 * This software is licensed under the terms described in the concrete5.org marketplace.
 * Please find the add-on there for the latest license copy.
 */
console.log("jl magic slice loaded");
if ("undefined" == typeof JtF) var JtF = {};
"undefined" == typeof JtF.magic_slice && !function (e) {
    JtF.magic_slice = {}, JtF.magic_slice.debug_flag = !1, JtF.magic_slice.set_options = function (e) {
        e.debug_flag && (JtF.magic_slice.debug_flag = e.debug_flag)
    }, JtF.magic_slice.debug = function () {
        JtF.magic_slice.debug_flag && window.console && window.console.log && (1 == arguments.length ? window.console.log(arguments[0]) : window.console.log(arguments))
    }, JtF.magic_slice.element_info = function (t) {
        return JtF.magic_slice.debug_flag && window.console && window.console.log ? (t = e(t).first(), ' tag="' + e(t).tagName() + '" id="' + e(t).attr("id") + '" class="' + e(t).attr("class") + '"') : ""
    }, "undefined" == typeof e.fn.jl_magic_CommonAncestor && (e.fn.jl_magic_CommonAncestor = function (t) {
        var i = [], a = 1 / 0;
        t && (a = t), e(this).each(function () {
            var t = e(this).parents();
            i.push(t), a = Math.min(a, t.length)
        });
        for (var _ in i) i[_] = i[_].slice(i[_].length - a);
        for (var n = 0; n < i[0].length; n++) {
            var r = !0;
            for (var c in i) if (i[c][n] != i[0][n]) {
                r = !1;
                break
            }
            if (r) return e(i[0][n])
        }
        return e([])
    }), "undefined" == typeof e.fn.here_or_offspring && (e.fn.here_or_offspring = function (t) {
        var i, a = e([]);
        return e(this).each(function (_, n) {
            e(this).is(t) ? i = e(this) : e(this).has(t) && (i = e(this).find(t)), i && (a = e(a).add(i))
        }), a
    }), "undefined" == typeof e.fn.tagName && (e.fn.tagName = function () {
        return this.get(0) ? this.get(0).tagName.toLowerCase() : "undefined"
    }), "undefined" == typeof e.fn.jl_magic_replace_out_of_box && (e.fn.jl_magic_replace_out_of_box = function (t) {
        var i = e([]);
        return e(this).each(function (a, _) {
            for (var n, r = this, c = t ? t : 5; e(r).parent().children(":not(script,link,style)").length < 2 && c;) c -= 1, n = e(r).parent(), JtF.magic_slice.debug("Climbing and replacing up to " + JtF.magic_slice.element_info(n)), e(n).replaceWith(e(n).children());
            var l = e(r).here_or_offspring(":header").attr("id");
            e(r).here_or_offspring(":header").removeAttr("id"), e(r).attr("id", l), JtF.magic_slice.debug("Replaced Container ID=" + l + " from " + JtF.magic_slice.element_info(r)), i = e(i).add(r)
        }), JtF.magic_slice.debug("Resulting replaced containers ", i), i
    }), "undefined" == typeof e.fn.jl_magic_climb_out_of_box && (e.fn.jl_magic_climb_out_of_box = function (t) {
        var i = e([]);
        return e(this).each(function (a, _) {
            for (var n = this, r = e(n).here_or_offspring(":header").attr("id"), c = t ? t : 5, l = e(n).siblings(":not(script,link,style)").length; 1 > l && c;) c -= 1, n = e(n).parent(), JtF.magic_slice.debug("Climbing out of container ID=" + r + " to " + JtF.magic_slice.element_info(n)), l = e(n).siblings(":not(script,link,style)").length, JtF.magic_slice.debug("Climbing up to " + JtF.magic_slice.element_info(n));
            i = e(i).add(n)
        }), JtF.magic_slice.debug("Resulting climbed containers ", i), i
    }), "undefined" == typeof e.fn.jl_magic_clone_box_wrapper && (e.fn.jl_magic_clone_box_wrapper = function (t) {
        var i = [];
        return e(this).each(function (a, _) {
            var n = this, r = this, c = e(r).here_or_offspring(":header").attr("id");
            e(n).addClass("jl_magic_clone_box_wrapper_marker");
            for (var l = t ? t : 5, s = e(r).siblings(":not(script,link,style)").length; 1 > s && l;) l -= 1, r = e(r).parent(), JtF.magic_slice.debug("Detecting wrapper for container ID=" + c + " to " + JtF.magic_slice.element_info(r)), s = e(r).siblings(":not(script,link,style)").length, JtF.magic_slice.debug("Detecting wrapper up to " + JtF.magic_slice.element_info(r));
            var g = e("");
            e(g).append(e(r).clone()), e(g).children().addClass("jl_magic_tabs_overall_wrapper"), e(g).find("script,link,style").remove(), e(g).find(".jl_magic_clone_box_wrapper_marker").parent().html("");
            var o = e(g).html();
            JtF.magic_slice.debug("Wrapper HTML " + o), i[c] = o, e(n).removeClass("jl_magic_clone_box_wrapper_marker")
        }), JtF.magic_slice.debug("Cloned Box Wrapper ", i), i
    }), "undefined" == typeof e.fn.jl_magic_makeSections && (e.fn.jl_magic_makeSections = function (t, i) {
        var a = e([]);
        return e(t).each(function (t, i) {
            e(this).addClass("jl_magic_tabs_temp_marker").parents().addClass("jl_magic_tabs_temp_marker")
        }), e(this).each(function (t, _) {
            var n = e(this).here_or_offspring(":header").attr("id");
            JtF.magic_slice.debug("Wrapper id=" + n + " from " + JtF.magic_slice.element_info(this));
            var r = e(this).nextUntil(".jl_magic_tabs_temp_marker").filter(":not(script,link,style)");
            e(this).remove(), e(r).wrapAll('<div id="' + n + '" class="' + i + '">'), JtF.magic_slice.debug("Wrapped section=" + JtF.magic_slice.element_info("#" + n)), a = e(a).add("#" + n)
        }), e(".jl_magic_tabs_temp_marker").removeClass("jl_magic_tabs_temp_marker"), a
    }), JtF.magic_slice.make_tabset_html = function (t, i, a) {
        var _ = e("#" + i + "_proforma").first().clone(), n = e(t).first().clone();
        e(n).removeAttr("id"), e(_).removeAttr("id").show().find("#" + i + "_proforma_tab_element").remove(), e(_).addClass("jl_magic_tabs_controls jl_magic_tabs " + i + " jl_magic_tabs_screen jl_magic_tabs_tabset_size_" + e(t).length + " " + a), e(_).removeClass("jl_magic_tabs_proforma jl_magic_tabs_divider jl_magic_tabs_origin");
        var r = e(_).find("#" + i + "_proforma_inner_container").removeAttr("id");
        e(r).addClass("jl_magic_tabs").addClass(i);
        var c = e("#" + i + "_proforma_tab_element").first().clone();
        return e(c).removeAttr("id"), JtF.magic_slice.debug("Found proforma_tab_element " + JtF.magic_slice.element_info(c)), JtF.magic_slice.debug(c), e(t).each(function (a, _) {
            var n = e(this).here_or_offspring(":header").attr("id"),
                l = e.trim(e(this).here_or_offspring(":header").text());
            if (JtF.magic_slice.debug("Tab Heading " + l + "; ID " + n), n && l && "undefined" !== n) {
                var s = "";
                s = e(c).clone();
                var g = e(this).here_or_offspring(":header.jl_magic_tabs").attr("class");
                g && (g = g.replace("jl_magic_tabs ", ""), g = g.replace("jl_magic_tabs_divider", ""), g = g.replace("jl_magic_tabs_origin", ""), g = g.replace(i, ""), e(s).addClass(g)), a == e(t).length - 1 && e(s).addClass("jl_magic_tabs_last_in_tabset");
                var o = e(this).here_or_offspring("[title]").attr("title");
                o && e(s).attr("title", o), JtF.magic_slice.debug("Making tab control " + JtF.magic_slice.element_info(s)), JtF.magic_slice.debug(e(s).html());
                var m = e(s);
                for ($ix1 = 10; m.children().length > 0 && $ix1;) m = m.children(), $ix1--;
                e(s).is("a") ? (e(s).attr("href", "#" + n), e(m).text(l), JtF.magic_slice.debug("Making tab A " + JtF.magic_slice.element_info(s))) : e(s).find("a").length > 0 ? (e(s).find("a").attr("href", "#" + n), e(m).text(l), JtF.magic_slice.debug("Making tab nested A " + JtF.magic_slice.element_info(s))) : (e(m).html('<a href="#' + n + '">' + l + "</a>"), JtF.magic_slice.debug("Making tab creating A " + JtF.magic_slice.element_info(s))), e(r).append(s)
            }
        }), e(n).is(":header") ? _ : e(n).find(":header").length > 0 ? (e(n).find(":header").replaceWith(_), n) : _
    }, JtF.magic_slice.make_accordionset_html = function (t, i, a) {
        var _ = [], n = e("#" + i + "_proforma").first().clone();
        return e(n).removeAttr("id").show(), e(n).addClass("jl_magic_tabs_controls jl_magic_tabs jl_magic_tabs_accordion " + i + " jl_magic_tabs_tabset_size_" + e(t).length + " " + a), e(n).removeClass("jl_magic_tabs_proforma jl_magic_tabs_divider jl_magic_tabs_origin"), e(n).find("#" + i + "_proforma_inner_container").removeAttr("id").addClass("jl_magic_tabs").addClass(i), JtF.magic_slice.debug("Found proforma_tab_element " + JtF.magic_slice.element_info(n)), JtF.magic_slice.debug(n), e(t).each(function (a, r) {
            var c = e(this).clone(), l = e(this).here_or_offspring(":header").attr("id"),
                s = e.trim(e(this).here_or_offspring(":header").text());
            if (l && s && "undefined" !== l) {
                var g = "";
                g = e(n).clone();
                var o = e(g).find("#" + i + "_proforma_tab_element").removeAttr("id"),
                    m = e(this).here_or_offspring(":header.jl_magic_tabs").attr("class");
                m && (m = m.replace("jl_magic_tabs ", ""), m = m.replace("jl_magic_tabs_divider", ""), m = m.replace("jl_magic_tabs_origin", ""), m = m.replace(i, ""), e(o).addClass(m)), a == e(t).length - 1 && e(g).addClass("jl_magic_tabs_last_in_tabset");
                var d = e(this).here_or_offspring("[title]").attr("title");
                d && e(g).attr("title", d), JtF.magic_slice.debug("Making accordion control " + JtF.magic_slice.element_info(g)), JtF.magic_slice.debug(e(g).html());
                var f = e(g);
                for ($ix1 = 10; f.children().length > 0 && $ix1;) f = f.children(), $ix1--;
                f.is("a") ? (f.attr("href", "#" + l).text(s), JtF.magic_slice.debug("Making accordion A " + JtF.magic_slice.element_info(g))) : f.find("a").length > 0 ? (f.find("a").attr("href", "#" + l).text(s), JtF.magic_slice.debug("Making accordion nested A " + JtF.magic_slice.element_info(g))) : (f.html('<a href="#' + l + '">' + s + "</a>"), JtF.magic_slice.debug("Making accordion creating A " + JtF.magic_slice.element_info(g))), !e(c).is(":header") && e(c).find(":header").length > 0 ? (e(c).find(":header").replaceWith(g), _.push({
                    group_id: l,
                    tab_group_item: c
                })) : _.push({group_id: l, tab_group_item: g})
            }
        }), _
    }, JtF.magic_slice.getQueryParameter = function (e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"), i = t.exec(location.search);
        return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
    }, JtF.magic_slice.maybe_tab_link = function (t, i, a) {
        var _ = e(t).attr("href"), n = e(t).text();
        if ("#" == _.charAt(0)) {
            var r = JtF.magic_slice.open_named_tab(_, n, a);
            if (r !== !1) {
                i.stopPropagation(), i.preventDefault();
                var c = e(r).offset().top, l = e(window).scrollTop(), s = l + e(window).height(),
                    g = Math.min(e(window).height() / 5, 100);
                (l > c || c > s) && e(window).scrollTop(c - g)
            }
        }
    }, JtF.magic_slice.nice_fragment = function (e) {
        return e ? e.replace(/.*#+(.*)/, "#$1") : ""
    }, JtF.magic_slice.fragify = function (t) {
        return t ? "#" + e.trim(t).replace(/^#+/, "") : ""
    }, JtF.magic_slice.open_named_tab = function (t, i, a) {
        a ? e.extend(a, {click_from_code: !0}) : a = {click_from_code: !0}, t = JtF.magic_slice.fragify(t);
        var _ = e(".jl_magic_tabs_controls ul.jl_magic_tabs").find('a[href="' + t + '"]').first();
        if (e(_).length < 1 && (_ = JtF.magic_slice.find_tab_by_name(t, i)), e(_).length < 1) return JtF.magic_slice.debug("url for tab not found:" + t + " " + i), !1;
        var n = e(_).attr("href");
        if (e(n).is(":visible")) return !1;
        var r = e(n).parents(".jl_magic_tabs_divider").andSelf().toArray().reverse();
        return e.each(r, function (t, i) {
            var _ = e(this).attr("id");
            return e("#" + _).is(":visible") ? void JtF.magic_slice.debug("open_named_tab already visible", _) : (JtF.magic_slice.debug("open_named_tab clicking", _), void e(".jl_magic_tabs").find('a[href="#' + _ + '"]').trigger("click", a))
        }), _
    }, JtF.magic_slice.find_tab_by_name = function (t, i) {
        var a = null;
        if (JtF.magic_slice.debug("find_tab_by_name params", t, i), t) {
            if (t = JtF.magic_slice.fragify(t), JtF.magic_slice.debug("find_tab_by_name comparing (a)", t), a = e(".jl_magic_tabs_controls ul.jl_magic_tabs").find('a[href="' + t + '"]').first(), e(a).length > 0) return JtF.magic_slice.debug("find_tab_by_name found tab_with_id (a)", a), a;
            var _ = JtF.magic_slice.sanitize_txt(t);
            if (JtF.magic_slice.debug("find_tab_by_name url_tab", t, _), _ && (e(".jl_magic_tabs_controls ul.jl_magic_tabs a").each(function (t, i) {
                    var n = JtF.magic_slice.sanitize_txt(e(this).text());
                    return JtF.magic_slice.debug("find_tab_by_name comparing (b)", n), n && n == _ ? (a = this, !1) : !0
                }), e(a).length > 0)) return JtF.magic_slice.debug("find_tab_by_name found tab_with_id (b)", a), a
        }
        if (i) {
            var n = JtF.magic_slice.sanitize_txt(i);
            if (JtF.magic_slice.debug("find_tab_by_name text_tab", i, n), n && (e(".jl_magic_tabs_controls ul.jl_magic_tabs a").each(function (t, i) {
                    var _ = JtF.magic_slice.sanitize_txt(e(this).text());
                    return JtF.magic_slice.debug("find_tab_by_name comparing (c)", _), n && _ && _ == n ? (a = this, !1) : !0
                }), e(a).length > 0)) return JtF.magic_slice.debug("find_tab_by_name found tab_with_id (c)", a), a
        }
        return a
    }, JtF.magic_slice.sanitize_txt = function (t) {
        return t ? e.trim(t.toLowerCase()).replace(/[^a-z0-9]+/g, "") : ""
    }, JtF.magic_slice.get_direction = function (t, i) {
        if (!t || t.length < 1) return !0;
        if (!i || i.length < 1) return !1;
        e.isArray(t) && (t = t[0]);
        var a = e(t).get(0);
        if (!a || !a.compareDocumentPosition) return !0;
        var _ = e(i).get(0);
        if (!_ || !_.compareDocumentPosition) return !1;
        var n = _.compareDocumentPosition(a);
        return JtF.magic_slice.debug("doc_compare", n), 4 == n ? !1 : !0
    }, JtF.magic_slice.find_tab_body = function (t) {
        var i = e(t).attr("href");
        return e(i).length < 1 && (i = e(t).find("a").first().attr("href")), e(i).length < 1 && (i = e(t).closest("a").attr("href")), e(i).length > 0 ? e(i) : null
    }, JtF.magic_slice.external_tab_navigation = function (t, i, a, _, n) {
        if (e(".jl_magic_tabs_controls").length < 1) return JtF.magic_slice.debug("external_tab_navigation - no tabs on page", i, a, _, n), null;
        if (JtF.magic_slice.debug("EXTERNAL_TAB_NAVIGATION " + i + " " + a + " " + _), "goto" == i && (a || _) && (target_tab = JtF.magic_slice.find_target_tab(a, _), e(target_tab).length > 0)) return JtF.magic_slice.debug("goto", target_tab), JtF.magic_slice.open_named_tab(e(target_tab).attr("href"), a, n);
        var r = JtF.magic_slice.derive_best_target_set(t, a, _);
        if (e(r).length < 1) return null;
        if ("first" == i) {
            var c = e(r).find('a[href^="#jl_magic_tabs_"]').first().attr("href");
            return JtF.magic_slice.debug("external_tab_navigation - first", c), JtF.magic_slice.open_named_tab(c, c, n)
        }
        if ("last" == i) {
            var l = e(r).find('a[href^="#jl_magic_tabs_"]').last().attr("href");
            return JtF.magic_slice.debug("external_tab_navigation - last", l), JtF.magic_slice.open_named_tab(l, l, n)
        }
        var s = JtF.magic_slice.find_current_tab(r);
        if (e(s).length < 1) {
            var g = e(r).find('a[href^="#jl_magic_tabs_"]').first().attr("href");
            return JtF.magic_slice.debug("external_tab_navigation - first by default", g), JtF.magic_slice.open_named_tab(g, g, n)
        }
        var o = e(s).find('a[href^="#jl_magic_tabs_"]').attr("href");
        JtF.magic_slice.debug("external_tab_navigation - current_tab_href", o);
        var m = [];
        if (e(r).find('a[href^="#jl_magic_tabs_"]').each(function (t, i) {
                var a = e(this).attr("href");
                !a || "#" === a || a.length < 2 || 0 !== a.indexOf("#jl_magic_tabs_") || m.push(a)
            }), JtF.magic_slice.debug("tab_hrefs", m), !m || m.length < 0 || !o) return JtF.magic_slice.debug("external_tab_navigation - no tab data", m, o), null;
        var d = e.inArray(o, m);
        if (0 > d) return JtF.magic_slice.debug("external_tab_navigation - no current index", o), null;
        var f = d;
        return "prev" == i ? f = Math.max(0, f - 1) : "next" == i ? f = Math.min(m.length - 1, f + 1) : "prev_cycle" == i ? (f--, 0 > f && (f = m.length - 1)) : "next_cycle" == i && (f++, f >= m.length && (f = 0)), JtF.magic_slice.debug("external_tab_navigation - new tab", f, m[f]), JtF.magic_slice.open_named_tab(m[f], m[f], n)
    }, JtF.magic_slice.get_all_selected_clases_selector = function (e) {
        e || (e = "jl_magic_tabs_selected");
        var t = e.split(/[\,\s\.]+/);
        return "." + t.join(".")
    }, JtF.magic_slice.extract_set_class_sel = function (t) {
        var i;
        return e(t).is(".jl_magic_tabs_controls") || (t = e(t).closest(".jl_magic_tabs_controls")), e(t).length < 1 ? "" : (e.each(e(t).attr("class").split(" "), function (e, t) {
            return 0 !== t.indexOf("jl_magic_tabs_") ? !0 : t.search(/\_s\d+$/) < 14 ? !0 : (i = t, !1)
        }), JtF.magic_slice.debug("external_tab_navigation - extract_set_class_sel", i), i)
    }, JtF.magic_slice.find_default_set = function (t) {
        var i, a = e(t).closest(".jl_magic_tabs_divider").attr("id");
        JtF.magic_slice.debug("external_tab_navigation - find_default_set closest tab body " + a), i = a ? e(".jl_magic_tabs_controls").has('a[href="#' + a + '"]') : e(".jl_magic_tabs_controls").first();
        var _ = JtF.magic_slice.extract_set_class_sel(i), n = e("div.jl_magic_tabs_controls." + _);
        return JtF.magic_slice.debug("find_default_set - found default set " + _), n
    }, JtF.magic_slice.find_target_tab = function (t, i) {
        if (!t && !i) return null;
        var a = JtF.magic_slice.find_tab_by_name(t, i);
        if (e(a).length > 0) {
            var _ = e(a);
            return JtF.magic_slice.debug("find_target_tab", _), _
        }
        return JtF.magic_slice.debug("find_target_tab - failed", t, i), null
    }, JtF.magic_slice.find_target_set = function (t, i) {
        var a = JtF.magic_slice.sanitize_txt(i), _ = e("#" + a + ",." + a).first();
        if (e(_).length > 0) {
            var n = JtF.magic_slice.extract_set_class_sel(_), r = e("div.jl_magic_tabs_controls." + n);
            return JtF.magic_slice.debug("find_target_set", r), r
        }
        return JtF.magic_slice.debug("find_target_set - returning default"), JtF.magic_slice.find_default_set(t)
    }, JtF.magic_slice.find_parent_set = function (t, i) {
        if (e(i).length < 1) return JtF.magic_slice.debug("find_parent_set - returning default"), JtF.magic_slice.find_default_set(t);
        var a = JtF.magic_slice.extract_set_class_sel(i), _ = e("div.jl_magic_tabs_controls." + a);
        return e(_).length > 0 ? (JtF.magic_slice.debug("find_parent_set", _), _) : (JtF.magic_slice.debug("find_parent_set - returning default"), JtF.magic_slice.find_default_set(t))
    }, JtF.magic_slice.derive_best_target_set = function (t, i, a) {
        if (i) {
            var _ = JtF.magic_slice.find_target_tab(i, a);
            return e(_).length > 0 ? (JtF.magic_slice.debug("derive_best_target_set - parent of tab"), JtF.magic_slice.find_parent_set(t, _)) : (JtF.magic_slice.debug("derive_best_target_set - from selector"), JtF.magic_slice.find_target_set(t, i))
        }
        return JtF.magic_slice.debug("derive_best_target_set - default set"), JtF.magic_slice.find_default_set(t)
    }, JtF.magic_slice.find_current_tab = function (t) {
        var i = JtF.magic_slice.get_all_selected_clases_selector(e(t).first().attr("data-selected-class"));
        return current_tab = e(t).find(i).first(), JtF.magic_slice.debug("external_tab_navigation - current_tab", current_tab), current_tab
    }, JtF.magic_slice.rememberTab = function (e, t) {
        var i, a = new Date;
        a.setTime(a.getTime() + 864e5), i = "; expires=" + a.toGMTString(), document.cookie = encodeURIComponent(e + "-" + CCM_CID) + "=" + encodeURIComponent(t) + i + "; path=/"
    }, JtF.magic_slice.stringify = function (e) {
        return JSON && JSON.stringify && e ? JSON.stringify(e) : "==no data object=="
    }
}(jQuery);