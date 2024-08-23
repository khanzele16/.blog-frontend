import React from 'react'
import { NavLink } from 'react-router-dom'
import './Comment.css'

const reactionsCatalog = {
	like: 'data:image/png;base64,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',
	laugh:
		'data:image/png;base64,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',
	fire: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAC/VBMVEUAAADWKQHLHgHvPAPpNgLnOQPxXgjuZg/qMgHsNAHTKAPSJQLUMAXdJwHNHwLJGgHOIALMIQPcSgnMGgDwPAHoMwHiLgDOHQDvOAHLGQDZJgHTKwPpZwzaKgLyOgHqZAzvjwXiLAD4gxTjUAzvPgL/99fqcyrwQQPJFQDtZg7wWwv4hhXsNADoWAvydBDsYQ3pchjsZg72QALvbA/dSwvWIwHvYAzQMgfmMQLrMgLaRgn5y3DjLAD/7aL/5m//0QD/0gD/0gD8VAb8UAX8WAf6TAT/zgH8XAj/0AH9wQX4RgP6rAv5SQP/ygL2QgL+xwP8tgj+wwT/zAL0QAL5qAz8UgX5ow3+xgP+lRf9YQn5pgz8vgX/+ub//PD/oBrxOgHtNgH/9c34oQ76sQn8TgTwOAH//O3/pxv/mBj4nw77rgryPQLzOwH/mxj3nQ/7swn9Xgj8uQfkLgH//fPrNAH/+eL/nRn9ZAr/++r3mg//7qv6ixTpMgH/99P/88L/oxr+fRD/8bf9uwf/yQL2PQHgKgD/+d7/+Nr/7ab/43f8jxb8eA/dJwD/8LH3gxPnMADZJAD//vj+kBb6hhT8dA39Vgb4RAL/7aH/6Ir/5YT5pQ37SQP/65v/6pX+kxb+jBXVIAD/6ZD2exHwbhD+hxPzdRHtag/pXw38cAv/8r36RwLMGQD/99f/5X7/32D/3E73lxH6qQv8bAv8aQriUQr3fhP7gRLxchDrZA79WQf/9Mj1eBHkVwz4QAHSMQXPKwTRHQD//fX/9Mb/4W7/1kT/8Lv/4WjfTAnbQwjVOAf///v9gw71WQnLIwP4YgrdSAnYPgj2UQb6RQL5QgH1aA32bQzwZgznWQvwUgj+sgXqPQP/1Df/1Rr6fxH2cw//wArxTAb+ogvyXgrsRQXpewT90GH/3Fj+yRTxRQTlNgL+kAj+nAf8TAP/2S7/qwr/3lf7xEX9xyz7tiT9vxf3hwz8nwfZOgbgZAP7sh7/8K773aX5qxfRNgXpnW//lhWQAGa8AAAAQXRSTlMAECAgcEAQIO+fYDDv36CAcNnCv71fUEDf38+2pqN/MPu/n4+PQEDv79/f1c/Fb2Dv79+/qJCHgIB/cED177+QUP5KkMQAAAr+SURBVGje7dp5WFRlFAbwAdFMSjG30iwt2/d9XwZBkR2EJCFBkcokF0QRxTTQcteATKHAWBQhk0VBxS0FlwDNNQ0QXIAU9yXbn95zvu/ei0XOMMz4T706PP33e97znXvnXkz3n4+tle76pd3irt07Xy/Q6qb5s6eF9ezUSnc90m3+7LCwqPCgG1voLJ8uwOZFBYWEBF4P7iZg4UEhgaGh14HrPo2mGBg6FQm9Q2fZtKFmIcBYu9Wy5awVbP369dACLVvu5jDsx/CpwPYy19GS5boBCxze330vAs2yo3wm7MQPsBbsQZgLva+zzlKxORFOmLNzYqKiBdroLJROJ34A5uycmZiYmJm5Z687tBBLrUlLYD/+6Ozq6nqKuD0L9pJmoW7AjsFydHQcesoRGjj3/qEhncwvMYZi1Y6OvXv3HjrUkThnd9Jamp8ChmLV1buBEYd20NAtsLUlroDOhO3e7Wtv7+sr2rm6snZrK/NjNseOwdptjwgOp+eaucB9eGBH82O9jlVXw3JwcPj0U3joBs7V2b3/cAvcJztSMQeEOPuSPF9wUjP/ktxXfXB3aanUTupL7O3BSc3cx3bnsYMHS0v7ikzR6+vtEVXrZeb9kNaoUaP65rnp9Yf46DBKoZl3kI/AKt25801klJder3ejo9O6PUmDNNfdpAWKsYWc1FMyoKmTdO5PG3nrC+bB7j5YenTnzgiOF2Mn+66hbr5Suw/VWoebR3vwKFt5sLgYDq0vNCqHY6ObSS9dq8CgcBszWI+RlSfiJTDvCGiiGzhoLVqGhgSZ4U55w4NH9+3Ly8tF8kr0MlNGYTkbaB2f7A/t4WZjz8LaB4tyRsEuv0naGqGJ+yS0Zg/yhqMH9u3fn5uB5Ob6K5h3HjSapHovobtyUGurZm4HWZDi6aNYTvopb3K3BhpXe755Q4QFRSRNwzzpAte6cTWcWrOqPQbrMDmzZuFHvV5LBjBo2pKgWmBQVDOq3fAArMOzOOCONMCORKCbqMZaovMCfN+EtzYde+rAflBqDjXA3HIjuBs2EhpXw1dpeJTJd+VHD6Si1xQZxrTUR0QQpu2ImGNPU4f4ROrhQlhqCNOSITR52+JqmKOpK3J7anphSmVlPmVK2pm/YU6ewHgj5dcNVgTYvM6mbWJqASxAJfiTH+MFTJOcnPr0KWGNNxKPXMo+3mjaJhakw0rjlGARS6ac0TBYffrlatV4RbCPQVEvmzjElFX5cQJLjsH3Sn59Q8rb2+2yWs1eVAMWPs/WhGJL0gtXzY2Dk5yclsZX2J8nG1Cw3NxK5I6IavLQbEwoVkDWxGSRKlJiksRpSSomxsMrgzBtjiYe2r0F6cKKjY3FDyikeQPrg1CrGA8PjwGH8pQ52gNzdibs5qbfO9JTyJo5M5Y07T4leqEVUQO8vOpFNb6w5ZUWZtXUYrDmTiQqKSkpNvaManEtWKDI8up3EtXEpWbylXYXWRNnxib5+fmB89R60WlpFFKizNFXuWPZNHEVMUNYoBBw0RKTvTBCpij+o3OByTk29bK+k4vBmgnrXY6fn8ScpMW1WKIER0CjDVEO7WGjrSfoWfohab1PAQdMs2QtSUVHRx8Rc1TvWK2NvkcteRQiWX5kjRs3DhwwUJo1gCgpjUZK5PIzhptICyMv5dWpj7fSPSosUIMGMVclD+zvFijE0zNXYmKOQbbGbfzSJQWFD+nuotVArUEIc25UjC9lWDxCpliiXKYN8VWfRDoZ9260OhU3jrsemilrTcZfaJOVA4uh5dAsUJyRIzMc5GXNTyLYfas2Bk8MxdJX4cB4hoMgIdCqlGIejVgjkeDLuKyxjvJhtRde17oafDcCljIX1xdboN5BJg96Ry0mLbEZGoVkAEMzR/zqZ2ooLrSe01oanOKSdMJ4D9lijdZDbiIOrK6iCpioRdLI4PeQEoEl4okOv2jVtQibZndtq9U6HBmwWK0Y5+pideXlVbIXl4KE1DuIB7rETHd3YDfOm9b92lhLwlahGWFaM286MbVYv/Pl5eUXG1oulIHYEMboMfxhm6h50wwc2osSi70Kq9KK8daXFxUVlUezBUpaOS4REssEFhgE7GYD+7FuqdpMnSPf8Olmz6uI7YAFTbFYysnx8clVsfVGYU+vU7bxXXlo0PoQRsUIQ7G6FZyL2A1hAfIZOHBgPD8ZnMJr4VTCwgxhtwgsjldfXmfe+qun6F8usCL0klYOrARgotmeBf2NxwoFxqfGl7M2RcZW1NbWnj1bW3tRWFQrISHhjYR4e24GbGoovq3DZnc1gK1cuiS1cFUcNkRo4zyF5UTF5BS/likK5l6wQCHA6DWNXq4DGetpCPse6wiMq2GSk/Ui2kXmXwRHZCQwmiCoIUg8v6W5qss4u7sBbNu61XRoqJbE3TBE9cjquJh/7VYl57mXtIYNy0MzTJGwEDqy+XYGtnEbHxpVi/WDdgaQcmR1RYyd36KmSClG1AhgylcMHRmwLgaus10rl/JlHZccm4RubhrmtmIrY1tnqNmC7VCtESPWKNhUMcX5Bp4e2+xaiTlytWQ8MB7Ra1jFjBm1dV5eRUDU/EzFMESyIrPFN4x4cqQpGnoutt2OOdI+zmUtWrGAbVmObJmxvGHOixNjK/KSva9DSrxrppzi7PltDf5D6i7sI729xJHWR3sKPr2okZxjbAgsYJX2GdmRO6kYX9GzF7cxhHUX1egxPw3P91qzrQsbSY0yRVjZGfHZ2ZG9+aGA12OxtSHsxe9QjU8NL4GHNKziy8ZSg2YqNisboWJyPTroDMVqB6rRQhZW5sf107Cvv2gsM2QzmuLEibAu8YMcnximaDDdUE0MsjLfQ1vGhZ83lkVo9pvSDIm8hItMnJjhKSJtUI0HeTilUq/m9GeNZmGOT02NXBBwkZEp/DjMxdoa9T9IfMeDxLE1wM5Obzw556Z/ztc0a4RhiLyKVMxwntuBQdKxFcxVLaflExrPz/SRGrgRKeoQsR5GVduxHRu59EBqodZs+pzGs2XOnF/OMQYNOawMcVMXwxJX+x2DZM1bsSo+bDwTJuBHTcIbkhs2bL+8xOjEjK0mtQHqfixbtqyYP0qKi/HBT2QRtp+/Y/BnP1lUzFpnZOw2SM1HwVZ88O9ZNgE3fuKQNw5ECesZndHpBm0XtB4qtpmy9qpsXrtZpNgHGjjKQWHdZm08ZnuT6LZaxQZfI2t/gwaOcoKtrCb9ZsJuIzTsZLCCTfq3kHaBnxspl4TVTtektBXacSe5IF/JfCzyFf4qmTTpggs08ny+Z6u9rmmx6grtp+3bPOTqA/jon5H0BRf5pBpJFh1YE2PdfuMGcMflPxhMGisSMDYAGUsfETIvvOcispJ6kWWCRuVcRLVfAijjr0rA+AAEqvIic3wxrPttm25JbcMuMcit48e/jbyl5m2KMIvl6+CI+ZvQC5YpsepWBo53xKlCOGPGjPmGMwZhE+KvwSOJG7FhUxbN0NS0KwMnju1Dcj5BvqXQf5DIXA2/wPv8BKuDlc70dGkPjrXThLGlahIbzG+gQzZkZWnXl+nlyo7rMcqFbzGnREySi3kiPWC176JrbqzblpVdwZZUfCBOTUZZkvFf4DcULleysu63azYlud8joQ2mjdTCmxhQfDF69PGNWfe3o9MyD9emwxV/p4rPArTIS2yRf/CVjVkd7ARlPu/2Hvqzm8ci2r1j+rkeK8s6tLPWWSB3vv7aq68M/lhk8K9/PH5LW7su6GS5tHrpHuSle22trXT/R+Qv/ks3UPZbfh8AAAAASUVORK5CYII=',
	cry: 'data:image/png;base64,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',
	angry:
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAC91BMVEUAAADfRxDrVw/sVQntXA7nQgPoRALkRQXoQwXzbA3jRAbnRQfzaxDxaBDmRAXsVhDyZw3lRQj0chTnQgToQwbnRgP1eBf0cxfuVwb1fBvtVgXhRg7nQwT1dhn1eRjhRwzmRgvvZBDzbBLzaQrtVwTzZwvvXAj0dhnvXAn2fh7fSBTkQgTpRQL1dxnnUATybhLpRQLzcBN2IgH0dhbwaBH1eRjxbBL9r0z2fRnuXw74gxzpQwH6iyLtXA3uYxD0cxXjTw39uln3gRv6lzLwahH5hx7zdBT2fhv2exhyIQH9vl79uFbuYQ9vIAH5lTH6jSTvZRH9tlT8rUnoVAz5iSDmQwH7oT3gRAhrHgD9vFv8q0b+wmP9s1H9sU76nTn7nTb4iyf0dRb8qUX7oz77lzD4jSr9wGDqVQ3rUwvkQgP8qEL1exv8rEj8pkH6kCf+y2/9tVL2gB/1fR7nUAxbGAD8nzj7kin5hR30cRTwZg/rWg7qSQH6mTXtWg3nUgz+xWj8pUD6mzfsVQxlHABfGgD+xGb9sk/7nDT7lS35kS3sVwzuWQXiQwX6nzv3hCP0eBbqWA73hyTwXwb+x2r5jyv1dxnvYg7uYQ3lTwxoHQD+0Xj8pT5iGwD+13/5ky/4iSb3gyDoQQD+z3X3gSDpUgv+zXL+yWzwZA/lUQxXFgD8qET7lCzsUwP4hiHtWQzgRQzvXAX8oTv7mjL5iSPuVgT+24X+1HvxZxD3gB3zbhP5jifsTwLrTAL7mjPxYwf8ozz5ki72dRHyahH7mTD4fxn4exXpTQf6mTR2Kwb1cQ/0bg3zagv2dxTyZgnlSwn8oDt5Mwz8nzb6dR6/YxlyKQX0chy3Sw+GPA6DNQv7oz22byjFbB7cZBmMRxX6sEjugyGnUhShQA1lIgXGfi6kXiGZVB3RaBjLXxKaSRGTOQv4nDTShzHSdCC2WhWrSRHujCzkgybldBlqJwjioUXcm0LZmULypj7kmjrKhjTrjizWgCrbeiHITwwSek9RAAAAL3RSTlMA/goZIPHV/mll4mFHWJYS5aZxWU4/6t3U0e/RvLOXjDYm+tK8rpd6ePa7sHrAslA7wx8AAA9CSURBVGje7NhbSJNhGAfwqIgsowN0hIrOdRFhVooEostmiUoWQ03ddLMLD+XGNo0EHZrbCBV1K2rmJLHAZbTN8hCeslU6zUSjE1l0gKCi6ADRVf/ne7fva2bnboKeC0Ed/vg/7/8d+5zwf/7PvzmT/dcsWbxw3jqVUqlcN2/h4iVz/Cf/fYUgvyUL1ynLKiqssvT0dFN6usxa0VjbIl64xG/S35WWrVmoApRu6hKJ8qXSFI0mRaq/JjIY22TO2pbghXOW/S1p4oz1kKzpRlG7VGPv7LRYLNnZ+NLZadfoHQatzBkiDl4/Y+JfoGbOmQ9KZjI49EN2gjKygkqSkkqCEjMItA/pFYb9zsbwyPlz/phbM4+nhjqDwgrqT17g52R9VVgcOMTbvzU3PHLemj/iZszPVJVZTbYeh94SVXXx5EkPJXgnL1blZAzpe5Au94prvv/vF3DxLZWyQqY19AwlF5y4iIE2dvDTEwXJGofCFrsnJLJ/8W/ehTm3zKo6Z6zWMJRz4NSpUydOkEcjMCRxcyBKo7Bhl1f65/n9TjEWw6p1tmn1UacPHKivr4cHkI0XweCn9TQHdg0ZtNBc3Usm/fIK53NWrC1ub1XV6dPwGEgjMBhyaE6fLghSaGMjwl3dK35xlf6wxCF7YvVhe/cePlwgeLzoTcSgqqqqgoLDCfb9sRHINs//l6zlt8zBsBJ37ty3j+PgVcFj40XIYRCkw4f37t2XZuO0AL9fqEZrnjkyPEKbFJaQwDjmgaOEvIPhIUj7du7cuUvEnVvvnJ+1/JbnpW6+kuso2RUVFebrQcQwBSNAJCUkJISF5eiok929P5nN/zKs4FxpSVLOLp7bKXDwGOSbiaSoqKhdu1KcIa7+7j6/n7NaQ/sjQ6SjQcnEwQuDRxzzMMzxQLwURlJOUkmJJCIc2vKfaMmyWa15/a4rjsS4uCCOy0E6noPHQEAkYXykpJLkoKC4FCpJ76wf3rdJzBJlpKUJ3JfpGMhD/Pp4KS4rKy0/hLQVM3+AraYlukzywoyMtMTEuCBwST5nx3ne7QkULFCwshLT0hoaaq5EoiSrflDE5ta8VJezVCKXZxOXhXTJSMdz8DCeTBh+f8mgmJSRXSiXt7lc/b3fL8nkWRQsJD+lVCKRF2bTLrN8jo55vIQRjgr7A5VdWCiXSCSluS5EW/69Y1t1eUNetytGp0spLYVWmN3ANISDJnBMEhaIWHGIBQqpIJWmpIiCgfV9Z5Ezmi9v6O22iq7l61K84aB5w5Hm8QRKiJXY0OCldLr8fBlh7hnfsibOar7c19tSExMDjoWDJoSjXTIQEEmgcngqjVEIBUkkiolpAda3YuI3sLVngHXLjF4tBRpq2SCES2KeIAmxUAz0AhZSEVXTld7d+81oCHam2d1Xl24ydtVwmjccVukNx3uQaIElQgkpF9sgRxlN6Uokc8+aOX6wY0cH3L30gRcawuWzcNBYT4hjHiBIjOIsUF4LK2QUPjJ397ndA37jBltQ2THgVlVAMxmNgib/opVeju0PlI8l4XMxyyombMW4VTwPrK+szMplM3Z5NZSStAY6ON7jJWq85x6zbjDLBKuirKzPPTDQMd6prSTMXOd5dDAJqyz1cHRyXpBBVAyuGUQN0g6vcefF5QJWV07YOHdt8hFgblXdWI02Sa2EBo48IJAYBQupLFghLKnumshzYDIKVqtUugc6OionfV0PwgJUyrqysZpwwRs8HkkchBKS1QmLnmt8LARTqvII+7oiCwgzqwTNtybQiMvArUsjkKQMGsTqtNsRS6prvyYUEVYtsMCBjsrKlWOtSdwWMzOhKcvAWWUcV0M3juMGwVkK4WHgkZSdjVQWUIMajVSnb3eIYgyw2gQrM9MNbNHYPU4lbIOZaXVMY9mgCeEsFtw6OIyyWBCrc3BQI5VyO1QYbEZgMpkTD6W1SrEqc3NAR+X582P7uJqwULMZGNOEbGyVaKVdIqFHQfIIQiiM3a7RgGpvdygECxiCicWZm/OAHVk93pGlpppZtrpaQeti4XR4uC0dxDLvyimgXH73rsTONggLFMZmM5qAWZ2NFKwFVnkgYQvGFP8csIFQYKSJlewGWH00HR6lNYMAJHcxdoyGBhSzkEvLLMJaYGVuDkwdALbb963f/wiw5tDQ1EDz5vGyiURcOKkGUwqQImGGpDwFy6bd39bWJuMs/B+BC7a9GdjZub63jLAtAaQJm3w4fGdk5PrN5/dfUymh6aUYDT/4hixHD6jX95/fvD5y/fawlVnhLeLgzPLA1O3bKs83nZ3u2w9g57e0BgRsT2XhqCXX1erqouNF1cXFd15yXHt7u17PiR4HvSDKcP+Ouri6qKioWq2+CasxJDxcHBxZHhi4ffuGyiNNZ5f6vjES1kpaKNOok6/eqouL4qOjo+OLikfuQ8M4PJ6eSQ5YMfdH+JepHz/ag2ActpmCMWz2mDJC27JlA9PMTKt7/ene0wfx8Ts27oguUj94Y1AowPU4ADIHo1C8ua0+Hk0viX/w9N6LGFqiJ1g5ggVsIcz3PWQRYds4LVTIhvvWZRn9eJPjqh8PGwzwwPXAIYhmuLiafh1/+0lJhiLWiVy5sFgwwpDs7KUpX2GVm5iWx5dSSTWpEI2+e4a/h3CPbDYbgWwMNM/VRdE7dow8ezeqb4vdylvBwZHAyNpC2DQf7FxT05HKg5wGzkcjLusDuOjj6kdGI+cxCWV/VIwVxj97P+qIjd26dc+eiNzcEFoiWeWwCGs6e+mGD9aEqTx4cNOmbdA2IBzTxHS9axsbK2pKPlyPRwGGtVoti4evWu2wuig+/ub7UQVRwCIimMWCcdY2YFcPfY19btfeQpqK4ziAr8suKBiSPhlUrxW13IyNtRVlZDDboEY+1pPWgy8NbA572AaRBRmUNjgPDQQ9sFZUoOmgqLA9DUmbYobZRbOLVA/dH/r+/v9z2TkuzS4PQV+6zJ3Yh+9vv3O2pf5QD2mEkVZVBay3l2lTGTEYjEZjsa+N4Mijv74KsaggirEXEz6i9BaGuGmL/UoymdZiEWBX/F2sGmmEnUE10jDJqZgYFPGoseBIIzQ5OLtwN36NTOisGtmqDl1J9qez2gUBdqqLVeMYPwEk7N0TnLNCTBwMBsW3jQo3IQYBsSOPr3Frh65Xtd2P/QgXabEksPaurlCop7r6NjTpwsW1x6IQp2dMHHsvvu5jWiPyWnzySDoSmyBK2g3J2kxWyH8dUzRpT+pkMnm9AxoN8jZOAL4iGCSw3gztHJ3Ybz4PHeyDxnPw4edh5UiTYoGy2WQr5MEUw6s02MYk4m1vRzV7NXZEXX9UeycKtZWVOHFjL3w+n4r19U2IUenIiMZSenV5OjDF8HoNVtLfn0w6O0jr6bGj2ubNfCFrHLt3TwfjeyqRWiGzdSs4rvn6fL4p5ch7Ruktv6fDjWJW7YV4Qz80dwfXCLuhYA5gdZWUPVFgpPlAUbYOKUeesFpzrY5UOhy2rtRg5WloKbkaWxHS8KwBG4pJDxkf9JHGQzcfylgcWEHLnUQxV7kGWz6QTvdfd6Ja19xqrxVspO8aCMlCvijY4MXdbA8VCxgsp7sfxay6T4SmMLo51WrAcBmx2apqahx7FeyZ7xo0cLAoexXsOa69DtXaIlstaVgmgzYlYWgthaudeyStQfTpfgQIwq5Pd5Qjr5h1Zo7VimKuEh1WbIUWcTud7dCUatBQrfeTtOCDL/Mx3PS9Uo5IlnLhkKxOFHOV6bBlLiuqud3OQgv58lEdnbrxV427ZA0UsuvmSN0eOvL0kt7yMqs1Dcs452NMBVVrkavZ2UIek7TeD4N4jxEfO7ELIY9Z7PaH0brauvjYy5oqsrZt1lqRBliJVQZ9NrigJVuUatX8erzNdh7axSNPn419PNHUJGuS1dTkY0d2OqqqbLCkXiFupSKRAavLlbDMwZa7aJAt0NpJs9sJkwdZs/vk1Z0HcUGCRpEp3HPx1r2dZzHCfMsPixcjy4wp6rOKqjXIg1RfRW3SdQSvHqTxdopFlyiH3vLIVicwTHFuyli1lKSFlBc2ruEaeRca41QK16j5LBQDVl4AW1rEqpHm5ZrydoR3gwaOexK1gNVJmMlQKBZWrTXV4vR62/3yIPM0BzRwpEjUXck6pOyhXbaA1Yet0HARLlwNWkNryg3N4w/JT5s6SZS7e2ZoZlgQhGhmctoBSmehl5esFBUbsCKmpYaC2QDMGkY10toLamdmh6M4wSvp3XY082ZuL9XCECnY+x9Xs6YjbEmg+Unjr6N0BoAbz0Rra/fAggZOyLzTWH7VwhB5MY2gW0hoDaShnMej4VAuF4+jFjBZi0anbIfyaqkWDZFSZvhh1pMWjkCjUSoc7QnK5YSogiHA4oIwzSnJ8ipWQ5iskvn+Q9pIWhoaHyX2BFw156YFYGyKMoZqsbpxvKIQpe1VzyzjvN9JsyQS0AYiEVoTcHI5cFuGgwJ95oPBgjFStWBGoagWdp5ZfDuKDfOmlGkNEV6OZkmeHd4k3vvG8aG3dmZyNpebnRyN48s43g3nMEBOuZtTra319Q20HAsNkbLCxLuBa1Xb0TTjeAseG50df3BfyoOpyQzuCmaIYrWam5lVL1mmZQt+48coafkcvG94Yz8zfv/GFqwnC248uD+OD/niN0hUq7mtDRY0zJA/YQtmTSABDhq4enDN3JsRZ8btfsTOw257/LfHR8VJkkChFsKW3gVrzYIUstKYCARIwzzAtTUjbncu50U82tD0PLkc/gFaAdq3r7MTFjtdLYafisWcIA4aOIRALqIjSkpBHzTiUBsgSJQBF6Iu4sLdEqQFwp2UfQjANkozD0NkhlfiFGINEGbU9FpwkqRZBzoRBYSoDxQ5x48fP3r0qDVAGHotIuVGYEj2KAWPs69wYPAAQrIBJBHAbiwqa4uo22HOSaKa7u5u+kt1VAoWzq9FZlnJYZaAOYtHu4DHglAwXDoOilmJ0hWGxcdihEUxZ7sv5Gc7Jf8OosySZSz+xR8+QTme0+YL3TB0UdGsmWZwGFgpRviLWVkE6DT9Pm3OFta6uYSAM5UZfieWIkg8BOqprFk6RJapeOnv/tRVsQmPdQDBn1IuX77Mb+AuBTNZQP1+ytcvOTBPYJrNpeWGP5UVlnVLLueFvlBjXFX8h39cblnZ6oolBVJRUrbC8DeydM3K1aXrKooIKapYV7q6eI3hf/7n38x32+0hj7ifLAwAAAAASUVORK5CYII=',
}

const sortingFn = (a, b) => b.count - a.count

const dotsCatalog = [
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				id='dots-comment-return'
				viewBox='0 0 24 24'
				fill='none'
			>
				<path
					d='M3 21.0001L14 21V5.98924C14 4.6252 14 3.94318 13.7187 3.47045C13.472 3.05596 13.0838 2.74457 12.6257 2.59368C12.1032 2.42159 11.4374 2.56954 10.1058 2.86544L7.50582 3.44322C6.6117 3.64191 6.16464 3.74126 5.83093 3.98167C5.53658 4.19373 5.30545 4.48186 5.1623 4.8152C5 5.19312 5 5.65108 5 6.56702V21.0001M13.994 5.00007H15.8C16.9201 5.00007 17.4802 5.00007 17.908 5.21805C18.2843 5.4098 18.5903 5.71576 18.782 6.09209C19 6.51991 19 7.07996 19 8.20007V21.0001H21M11 12.0001H11.01'
					stroke='#000000'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
		name: 'Перейти к посту',
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				id='dots-comment-save'
				viewBox='0 0 32 32'
			>
				<g strokeWidth='1' id='Layer_1'>
					<g>
						<path d='m7.4282 30.2998c-.4097 0-.8203-.1064-1.1963-.3193-.7715-.4366-1.2319-1.2266-1.2319-2.1128v-23.8902c0-1.4272 1.1611-2.5884 2.5879-2.5884h16.8242c1.4268.0001 2.5879 1.1612 2.5879 2.5884v23.8901c0 .8862-.4604 1.6763-1.2319 2.1128-.7705.436-1.6851.4243-2.4448-.0313l-7.021-4.2124c-.1865-.1113-.418-.1113-.6045 0l-7.021 4.2124c-.3892.2335-.8184.3507-1.2486.3507zm8.5718-6.6475c.2304 0 .7683.0308 1.3315.3696l7.021 4.2124c.1318.0794.2967.0816.4307.0059.134-.0758.2171-.2185.2168-.3726v-23.8901c0-.3242-.2637-.5884-.5879-.5884h-16.8242c-.3242.0001-.5879.2642-.5879.5884v23.8901c-.0003.154.0828.2967.2168.3726.1339.0758.2988.0735.4307-.0059l7.021-4.2124c.1974-.1187.6743-.3696 1.3315-.3696z' />
					</g>
				</g>
			</svg>
		),
		name: 'Добавить в закладки',
	},
	{
		icon: (
			<svg
				id='dots-comment-report'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
			>
				<path
					d='M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7'
					stroke='#969c9d'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
		name: 'Пожаловаться',
	},
]

function Comment(props) {
	const [isDots, setIsDots] = React.useState(false)
	const dotsButton = React.useRef()
	const dotsUl = React.useRef()
	React.useEffect(() => {
		const handleClickListener = event => {
			if (
				!event.composedPath().includes(dotsUl.current) &&
				!event.composedPath().includes(dotsButton.current)
			) {
				setIsDots(false)
			}
		}
		document.body.addEventListener('click', handleClickListener)
		return () => document.body.removeEventListener('click', handleClickListener)
	}, [])
	return (
		<div className='Comment'>
			<div className='Comment-header'>
				<NavLink
					to={`/${props?.author?.isUser ? 'u' : 'c'}/${props?.author?.id}/posts`}
				>
					<div className='Comment-header-author'>
						<img src={props?.author?.avatarUrl} alt='' />
						<div className='Comment-header-author-details'>
							<p id='author-details-name'>{props?.author?.name}</p>
							<div className='Comment-header-author-details-statistic'>
								<div id='author-details-where-content'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
										<path d='M6.46967 13.9697C6.17678 14.2626 6.17678 14.7374 6.46967 15.0303L11.4697 20.0303C11.7626 20.3232 12.2374 20.3232 12.5303 20.0303L17.5303 15.0303C17.8232 14.7374 17.8232 14.2626 17.5303 13.9697C17.2374 13.6768 16.7626 13.6768 16.4697 13.9697L12.75 17.6893L12.75 9.5C12.75 8.78668 12.9702 7.70001 13.6087 6.81323C14.2196 5.96468 15.2444 5.25 17 5.25C17.4142 5.25 17.75 4.91421 17.75 4.5C17.75 4.08579 17.4142 3.75 17 3.75C14.7556 3.75 13.2804 4.70198 12.3913 5.93677C11.5298 7.13332 11.25 8.54665 11.25 9.5L11.25 17.6893L7.53033 13.9697C7.23744 13.6768 6.76256 13.6768 6.46967 13.9697Z' />
									</svg>
									<p id='author-details-where'>
										{props?.where.length >= 25
											? `${props?.where.substring(0, 24)}...`
											: props?.where}
									</p>
								</div>
								<p id='author-details-date'>{props?.date}</p>
							</div>
						</div>
					</div>
				</NavLink>
				<div className='Comment-header-menu'>
					<div className='Comment-header-menu-buttons'>
						<button
							ref={dotsButton}
							id='comment-menu-dots'
							onClick={() => setIsDots(!isDots)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
									stroke='#969c9d'
									strokeWidth='2.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z'
									stroke='#969c9d'
									strokeWidth='2.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z'
									stroke='#969c9d'
									strokeWidth='2.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						{isDots ? (
							<ul ref={dotsUl} className='Comment-dots-catalog'>
								{dotsCatalog.map((el, index) => (
									<li id='dots-comment-catalog-li' key={index}>
										{el?.icon}
										<p>{el?.name}</p>
									</li>
								))}
							</ul>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<div className='Comment-main'>
				<p id='comment-main-text'>{props?.content?.text}</p>
			</div>
			<ul className='Comment-reactions'>
				{props?.reactions?.sort(sortingFn).map((el, index) => (
					<li id='comment-reactions-li' key={index}>
						<img src={reactionsCatalog[el?.name]} alt='' />
						<p>{el?.count}</p>
					</li>
				))}
			</ul>
			<div className='Comment-footer'>
				<p>Ответить</p>
			</div>
		</div>
	)
}

export default Comment
