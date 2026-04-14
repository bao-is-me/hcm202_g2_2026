import React, { useEffect, useRef, useState } from 'react';
import anh2 from './assets/anh2.png';
import anh3 from './assets/anh3.png';

const navItems = [
  { href: '#phan-mot', label: 'Giới thiệu' },
  { href: '#phan-mot', label: 'Chủ đề' }
];

const independenceCards = [
  {
    number: '01',
    title: 'Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của mọi dân tộc',
    content:
      'Theo Hồ Chí Minh, độc lập dân tộc không phải là điều xin được, cho được, mà là quyền thiêng liêng của mọi dân tộc. Dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.',
    image:
      'https://mediagiaothong.tapchixaydung.vn/mediav2/upload/giaothong/tapchigiaothong.qltns.mediacdn.vn/tapchigiaothong.vn/files/Thuy.duong/2020/05/14/ban-yeu-sach-1436.jpg',
    imageAlt: 'Quảng trường Ba Đình trong ngày Tuyên ngôn Độc lập năm 1945',
    evidence: [
      'Năm 1919, Nguyễn Ái Quốc gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Vécxây, đòi quyền tự do, dân chủ và bình đẳng cho nhân dân Đông Dương.',
      'Trong Tuyên ngôn Độc lập năm 1945, Hồ Chí Minh khẳng định: “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.”'
    ]
  },
  {
    number: '02',
    title: 'Độc lập dân tộc phải gắn với tự do, hạnh phúc của nhân dân',
    content:
      'Hồ Chí Minh không chấp nhận một nền độc lập chỉ có trên danh nghĩa. Theo Người, độc lập phải đi liền với tự do và hạnh phúc của nhân dân.',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUXGRoYGBgYGBgaGBgYGhcXGhgXFRoaHSggGBolHxUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARUAtgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABDEAABAwIEAgcFBQUHBAMAAAABAAIRAyEEEjFBBVEGEyJhcYGRMqGxwfAHQlLR8RQjM3LhFUNTYoKSsjRjc7MWosL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3clI4rmuXOcgHKaEpPwTQUBGlKm5oSyge0p6GCnFyB7SnuKCyonuqeiAjSnBCY9PzQgIkKbnTc6ArUZqA0ozXdyAqRNzrgUDilampzUBQkKULoQIuSgLkFE0prykKRyBEqRqVAqSEhK5rkD0HFYtlNpe9waALk2UPjfFaeHpmpUNtABcuP4WjmvI+kvH6uKceudkpgy2k0wBa2Z18zvLfQINL0i+0GoZZhBkA/vXRPiGnQd5WPGOxdR2Z9Su6d+sdE8wC6N9LKw6PdHush49mba38ZaOfLmt/wAN4TSZ7LGjTYIM5wPBY4mesqA63JadZ7OUwRz3+WvwfEcWDD25hF5udNRA18VYYai1WTKAQBwmLzDkeX14o8rq/DmuG7XDRw+fNDpsc2ztfj4IJTEZhQKZR2oCJALrpXNKB6ewJjSiNOyB6UJkrgUBQuTGrkFE4QhkpxXSEDQlXBJm7kHGN0hPohucq3pHjDTw7yDBIyg8i6xPlcoMJ0ixT8ZiQGuIYCWNjZgPafyGmbnAMXCr6/DqWdraebKHBhGpzOLjBO5hgzf6e+ZOEflaXjXq5DTMAOzOyiLl2SkP9xVDQxRkguygS7Nu6qSM5PqBtZoQegYHEttlsPuju1HuKs6WIWJ4NjLATNrfXNXjMXImR5c0Grw2JV1hqyw+CxJlabA15QXweuqszCFEZUUik9AJhRmOQqwh3iJSgoDAp0oIcnZvNAVpRWlADk+UBSUrSmApZQELlyZK5BS7IZSuKaHIOcmJ5KG9A2VlOn1chjGiYOeYiZDREeq1SzPTukf2cPAkscPIz7+Xmg82xPFbNy2imwtGwcBlvz5+SrXVcrnAc9TrbUd0+9NdSd90T3am2pjWNVHJnVBp+F1LAzv3fQ79dFdsq3Eke/5lZ/gh7O8/l9fFWfXwLfX1I9yC9oYlrbuMDmrrhnSLDf4rB4mF5xQc/E1MhxDaTOep8gCDz1IVljeiGCLQMPxFr6xmGPALXEbZ2WbeBJlB7DhHte2WkEdyMazGDM9waBuTC8l+y/jNUPNAkuZtvl1nxC3vSTF0GZhXcS1gBcwakkEx6CUFvQ4zQr/wXtfGpaQQJ8PL1Rw+yy3QzGcPrSME19NwBL6bgRIJuQZIN+RMWB2WmBQFlOYhAp7DCA/18F2ZMD0iA+dcChgrkBg5KhgLkFKUhKQlISgcCmOK4Jr3IOlCxWHbVYabhIcIPn805OaUHjruAhgeXVMuWBniwIMGNxdro8lTYxjXdth3uedzDiO+FsulHCiHGm49gVc5iJLHOmW8zDtOc8iqXDNp5ajcuWXkgTfqg0ASfxS6YPfyQReEEBoJJne457X0+t1c4ZoqEDLPh5aBxgf0Wbwj8pLb2PrHd9aqzwePLHfog0+F6KU2uDn0HYgO3Lwcvi15Ddze+i1XDOi+CpsDm4bI4OD5zHMHCYDXZjAubCyqOA8fa+Gk3WspvzDVBkOD8Kbh8W97GhrHOJa0fdBiG/Fb+vhmVQHFrSDrImbRfY2WPcC6q4MvB+C1nByS2D5+KCbgcKynDWsY0DQNaBHPRCqthxHJEFS8ckHFOlyBJT2lCaERqB2ZLmTQlCAwKeChgp+YboHJF1lyCiShMBunByB0oTinFyQoGlc1yRxTJQN4lw4VgDAzt00uNcpnvuDzPesH0jo0aTHue3M4CMuUZmnRoe4CWt7z816Ox6idIqYq4StTN5YfUCR6ESg8Yo0QYcJMgGefjyTXU4v8v6fHkiYIEAt5G2lpvz5z6qRWZmE7oB4Kuabpv8/eVr8NxurVHVU7SO047DkP8x+tVjQ2DfXnMWtYcoSO4q6lanAO5+ufz5oNPXOPpE9S1sf4hLbiBsSI81p+jOBx7Wu63E0W1H3a2OsifvOyuAjuv47Ly6vx+q8APMgbTAOkabTCvOj/ABamHdZ1jjVgDI0OdLcoFoaXEi3nuUHtL6RYSXHNYX0kwNlGJUfg/EDWoMe6RmGZs7tvH13o5CB4cnschgIjOSB5TiUgCUBARqcuYEpCDnLkhXIM+D9fX1dLKAyqnh6B8rpQiUjnICFyAX+Sc4oJKCUxyq+lXG24agSW5i7sgae0IknkJ9ymNqc1C4pwcYujUpugOcJYTs4QW+UgSg8sr1Mji4HW/wBe9EGJFr+g+hF0HEUXNmnUEOaS1wIu1wsR8PHXkob35dPrTyQWNap47Tr9Qqio2Tp5W85gdyltxZ/RTsN1LxDzB3PLx2396C26NV+FyG4nDt/mfUeDNtb5CNeWmgXqHR7E4DTBspgGJLLjkO1EGO7ReSswNOmDVa3PlEyb5ZIhwmx0frPsr0voJxOnUpkw1rmjNkEW7IE//U68vQL00mghrQAGCBGnl70hKGHkmd/6pS5AdpStKBUacmcuaxjSM73uDWhs9q5IvE+YumYLF0ngBmJpVnGS0Ne3MWlxgNFi8AECbzCCcwp5KjtcntN0Emm5PL4QWhKSgfK5DC5BmfJPBQA9PDkDsyVNbSJ0HuRG4Z24hAwlDlS24Ybn0SGkOQ+aAFOncSpYpOEFtx70FzspHI289vmpLA7Yx5IM30p6MtxgNSn2K4EQbCoB913I7B3hMjTyvFUHseWVGljm+00i48R89170KUX3VL0n6OUsa2DDKoHZqAXHIOH3m6277Qg8Ue2/6/X6JM0T9a/RVxxPo5iMNUa2uzK0kAPH8I/6hp4EA2JiyDUZlIdeSS1zd2kAhxA57zzKDSYPCvjDtqPLAaTXAWBDmiO0N71oM65HAi97bol2K7gRBl9MiT919WoNf9PcMxQui1CpXfTfUaeqZAp6tcXNyue4R7TbRlNjY7lbfA9G4r1KzXznJIB1uDodwc5QSmOEIOKeTDAcuaSSNWsbdxHeZDQdi8FTRgHgXE+F1kum2OrUWtyNltQPpvtLmggGW99ib7tCCqpn+06pq4jN+y0yW4eg05WENEdY463nXXUaC91jODYbEM6p9MMj2HsnOwzqM05rzYzudZVNwTGUshbRblpNALNQQCA64JMe1BMzO4sXTW4ymCLz57d0QNB4d0BrQFp0R4jVIq4bEnNXwzwxz/8AEYRNOoe8i0321JK0rXLI8FxNGpjajqbf3jaQbVIBgj92GSSYLpa/aY30C1NNBLa9IXJjSlAQEBXJoC5BnsLRHZzGAbQFd/sDBcXBVZXb2GEadmD4bKXw3Fl5exwgjT1sfcgJUYdrKI9hCspke7zTC1BUTfdMfZTa9DkoTwgV/aEacjbyjvT+H4vMCNCDB01GvyPgQuaeYTTSDXh4tmhrhzP3THOTl/1Dkgn5ykbrKRrfd9TKrKmONW1A9gGHPG/MU+evtenNBm+mvHetxDcDTyuaP4hk2fGZgBGmSATrrHNee1T2hUyyPuh03bEAE7kZYvrAsvX3dFuHOrtotaaeINNzi5hcIbEOeZtnIfHfN1n+P9AWZiMK5z2BsgWMXaAcx1FrxsbaIJ3Q3pJSxT20yOrq0zZliHN6sNc5hAAB17PIr0etZ7eRHw/ULwLD4Z+BxFKu0E5S0tzjL2st2O5AtcWz4m8QvbuF8VpYui2rRdI3H3mOFnNeNjMhBY0ql4UPpDws4ig9jHBlTVj+ThcT3HQ9xRC+4PeprXoPEcBwV9PNSqDqarSQ4HNlcLloqAXEEuyubILX5dLomKw/UwHGahuxlMOqPfc2aMtu1Ak7yYMNC9A+03q+po9Yxhmq1vWFhe6m32nZA0Ey4NLdhBKL0Tx2DqPBw9MCoGObndTLXGmxwBaHOk5ZcLSgpOhnAn4ek59YDr6xDniZyADs053iST3nzWlYEfiGGg5m6H3H8lGagkNTgghFBQPK5MlcgjAAg0ndmdO4xqFAru6tzKrjBaRTqcu0QGv8CYEqaMdTq9knK4aA2KNiMO2qxzHXLmlp7wRb0QIagD/5hI8RY/L1Tibqqo1Hfs7SfapkTO40/L0VjRqSAUC1bhQqrO5TCbphZMhBAPcEtSmYvP1yUzD0ANVKAkIMzisLVxBDHuinuxggVP5zclv+WY8VpcDgWta2BAiIGiE7BnUaqZgXksIOyCl6Q8LBxFF+mcPok3/vGOYJi8S9vopvCsLUcW9Y2pTEduC5pDgR2JGo1uNQO9E6UGMN1v8Ahua//aQ75K/qP3Fwb+RQV/EOD0KzYewbXFjI0k7+azXCuiBwuIFWlUJaZDrlpIM2cBZ1/wBFrsyHUKAbtkZpsgEooNkGU+1F7f2ekDMmrI/003z8VnfskP70gSIZW/8AZRiyvPtX/wCkpxc9b8aVWQD6egWf+yR9za+Srsf8Skg9PbdhnvVS1WbHXA+rquxFLK4jl8ED2uT0Fouit0QOB7lyaXLkDeJcLpVhDhB2cNQefiqLh+JrYasKGIOZrj+6q7O3yO5PifGPXSsqAhV3FsXRDerxIhrzAJsCRcFp2eIkReyBnFaYaysQOy+m5w8QJI90+aBweuHU/L3puHxmZlWi4y+kHCfxAslrx3Oa4G2kkbKD0TqTRbO4/RBeZrhFi6jZwjUzJQFNNPohOXNCAtNEpUoLo3v7kNoUlougreIVM2FrtI/u3HzDSfkpvCa+fDUH/ipU3erAVVcUq5A8a5g4R3EH81N4A3LhMO38NJg9GgfJBYwgvKfKGSgQhODrJCV0oMn9qP8A0tP/AMzd/wDJUWf+y1gknmyt/wC9q0H2p0nuwUM9prw+5AhrQcxk+Kpvs74NWoud1rQIDhZwdq5pAse4n0Qeh0Y170HilPRw8EtK2ymZWvbl0QVDCnNKG8FpjcFOmyB5KVDD1yAQaWmQh8cwwxGGq0jYuYcp5PAlrh3ggKY+jIkILGkFBh+F4/PRZis0A4U06hP4qfWXdOhGY+7uVn0exDQ1g7tNriZ7t15t0jpupYvE4am89UapOUezDofeNxMeS9L6PUGuwtObEkmYa6wgScwPIILPFZmGYlpKkMq6JlPC/dtHhH/EhEdgJ2POzvgHD5oJ2bdPa5Qxh3hpBkg823Hm0lOoVToR6GfdY+5BYNCM0qPTqhHpuQUfHh2vRDw3F8tOjTEfwA7XXtBvfYfNG6QXIHMIfCOGsq4eg5xcH08wDmm8ZiC0gggttoQgs8FiHvE5Rl5zfaxER5ypTl1EBoygaaJCUHDRKAke4DxKQUyfr4BBlPtPqgYJzozQ5rY0s8hszzErOdFulNao6o2jRY17YmXEjKHRyBG11pekvE8JWY6iMRh3PDiCyo+nGZuzmvMSCPJLRwWGFJ76BwjC4gjq3U+1ftN7Ou1kFjwzE13OBqvZf7rRbS9zdXtMtO4kcisfgHB4u7Q6Tp9fNXeE6obSUFnj8NIz7jWNwqsmFZ0XwLNdCFisHPaZY7j8kFfCRI4rkAmcUACyXSvjOJOIoUWB1OlUkucNXQDadWgQDzMhafCGnmnLDh+IW8tlT8exTajwG3yanvIv7vig8dpOOcl5LnSQ4uJkuuHSTrcFel8E6R0m06VOpnYWtPaa2WgE7wJG20WXn3GaWTE1m3/iEgfzdq3+5afhFJvY/lFjfcjz9lB6Zh67XMD6bw9tzLSCPdpfmg4/iuUMa10GW3ie+I7wFnaGFLe3SJpP/E20/wA40cO4qaa7XGatGrmbeaMZKkcwfYNtJ8yg1+GxOduaNf0TgQRcLJ4vpHUpE06eDf2Yu6oxouA6JaHXEhCwXSrFveGDAgk7/tFh3madkGuDQJOmm5jUd6ktN1S0+IVHvax1A08wcS7MHDsgECwgEk78laudDigq+kcth3cfcl6G1s2Hd/lqPHlIPzU3jOG6yiSNWiR8/ruVH9nlUmniGnarPqxvzaUGnSEpCmIInGHPEOp+2xrqjRNiWwCHdxDiPfslxHSKi3COxgM02tLiARmkGOrvo7N2Y5qQ9oNQNP8Ahu95aCnUuH0wA3IIGxGt5vzM3QfOXF64fiKzwCA+pUeAQJAc8uAOt7rUdDMSQwdqAHXADZghtpiYsVneklMNxeKDQABWqgAaAdY6wGyn9Cv4jo3y7nnvbvQbXh5w1N/W5sQObS4FsRzAv4LT8D6QUy4jq8rPxm5n/NO3wWDwt9RHgSBHKCVq+G4OW8vrdBujiglbixzVZg2/uw07W/JDp0szuTRMnkgNiMNneSwSN+UrlNpGRDfZGi5Bj3Nd1T31JY1rSYBueQJ2VBhWQ2y0XSV8UW0x991/Af1hUlClbTvQYXprh8mJDgPbY13dIJb8grXh1Qtyk6FjR3fePxhP+0PDSyhV5FzD/qgj/ifVCwteIOvZZ6ZAdNN0GnweJBjlI5c1d1a4LDG8D1dHwKy2HpCQQd/qFZ0Xy9gn73lABv33hBocGZmY9o+4x8ArGlTAuGiTvF1Q8KrSATvf1v8ANXFGqgKWQW9xPwUio2SUAVJcPH4kD5qa11zZAyibEHS6zPQsBtfFidRScfWo2fGw9AtSBdY2jQqNrvDQZcwCALnq6rXEAbnKXEeCDVMcH3aZgwiASoXB+GlrZe3tBxLbmw5+fzVhCCPAFdo503e57J+Kn0wFCxLP3lJ3e5h8HCfiwIjHwYKD566ZtjHYv/z1P+bkfofULX8wXAR6kHyhM6asjH4of9159TKTovicjjINy2/gf6/VkG64bwbK6Tpyvt89VrsK0AQkx2G7WdtneFj4j5oOGxAcOzqNRuD3hBe4dwcMuqWu+BlHmeZ5lZbEcSPX9XTeRlac0XkyIlT2cZMhr2z3tt6hBcurQAAuVDjOKsbu4d0LkFTxXGdbUzaBogA+pkcykpNkLjTzEu5knwk2R6FEhBR9NcPOEn8Lmkect/8A0q3D4cBxMH7sSdQGAba6LS9JqM4OtOzZiPwuB28FS4UAtgyZF4BMWAuBcDvGkckE7D1QjtIBLuTHEfEf8VFw7RMz2diLjXY6H49yfWpuFJxAcfZAABmMw/OPVBacLq9kad3cNgrmkCqLDVcuo129w8Fd4Qygn0GdpviPmfkpNJ2vifio+H1nz+H9VIoaDn9aoD0gqTi7hRrYeto3rmsPd1ksHlLwrphi5VN0yY2pg6jBVYx9nUyXD22uBEeaDUVQoj2qnHTXBimHPrsaYGYSTDo7TbDUHVDq9NsFq2oX/wArTv4wgs+IuAph34XNPlmE+6UaA781lOL9LKVWi9lNlTMQQJyNgx4mPrkmYDpuzMKTqRbUaJILx2h+Jlr6aIPK+nbSOI4ocqpPqGn5qDwJ37wabePly5L0DifRaji8RUxLqj2uqnMWDJDTAAbmIM+yrTonQw2HqtwlSg19Os/++aHEVMsNewnn2W25g2vIauuLKo4rwsvGek/q6kRmBgEcnLU8U4PSqNLQ+pSJ0c1x1vs6RuvHOlzMVg6hZXJyuvSrMLsjyNiJOUxMtNh3oDcGzUqz21WvYZ3BLTP3swEHx71paWNY09p48AJ+v1Xm9DpO4CHtzRM6DwPcfBWOB47RcQS3LtqTbcGAg0vF+KFpz0qPWg2MuLSPKDb+i5RaFSZylhvcWN9j9c0iCgo9Pq1MltSjSdyguEWkC8zqEX/5rXc0dWKebcQc0iTYEwR+Sy1Oh1zZHttFxbtAbjv5qNTJaZaSCLg7iN0GkHTnEuBDnNyusRkEkR8EB/Suq10jKAO65HfCp6lTrLn2tyAbknX3qNWoweYQatvTJwOYBs6EiJ8+Y0sU5vTJ7R2RE7aCR/lFljo+vyUmnSBEj493y70GlPTaqfvDvGUfEbLndNKwcDneGGx5iNxuddPgs4zCl31y56DkhGjFifruv3oNY/pjXGtWobzq6I3JiD9FCxHTOvNqjnCOZv7z9HuWZFKd/Dlv9eaku4e+JaA4aWInbUeaC3Z0vqGQ6/LWx1vJ2+SR3SUl1x8rxyn69yqafD3utlHhz8BHuQjhHjVpt6eqCVi8QX9ZlmHuNSLbzm8YI2UTDYh9MyCfXbkp2FogQT2dwW/KFMfw+nUkteJiSDztNhog7AcRzODngai8kRtO/P3qU3Dh1UZiCwty28jF9RJ35qhxGGdTi5/rHipnCq86kW3dlmNI7Xx5FBPxNGvRcQyq4tvlv4RPMxp5KNw3iNQ4zDOe4ucK1KJP/dbK0bactAL2iLjQGfTmDpyVO7DPZjKOfLHXUTIAEjrW3F7IPoXE149oWVbxHC4fF0nYeu0OY7bQg7OYdnDYqbjXxroozKbDcoPEulPQt+FrZHOlhH7t8CHtA7tHXggeOihYPobiqn8KhWdMQcoYI3MvgaxpOq+iqT2gCwMaEgEjwnRRMTWedyB3IPKeF/Z9xIN7VelRAsAe27wMCPeVy9RpYcyTmLp5lcg+Y6NUtILDBGh+vBXuG4hSqiHjI/WW+ySIgnkqF7e4oYMINPUojSR4m1h3/lyQMTghFpHON508L6fUVWGx7haf03Vw2s1wDhlnxvpedkFHWw0Hbw9fchU6hbPIgiD+W6u6bg4w5o5yORPh9eabiOFttqNI18ifrkgh0sWzWMvO2pjW9/1U1mIY7WOR0+v100Ub+zTByumNt4OltzpogHrKfOPLlF/ggnVaAdcbbwduXqguxNSmA2baxa/ptr9XXYbGkEA3GhkA7WsbdykOxDH6utpZo8d49figHT4qTAcATEzF+6DNtSrHD8SY7UGwFxEjujl9XVK7DdoRpv8AigEyYM3j5efUGO1Akf05a+aC6qll3CpodLjXbu+tVXY2s9jpbYH4Xm++k+fco7cxmLDxsPFFrMcYBDg7la/mDfRBMxNdrqINnPO+WIAI35wB3QqoCBab7eszdIzEObaxHI3G3nsmvrz90DncifGfRBY4LGNHZc2xgG8b6xtsrXhXCjiawZhi11SxDSTDYLYeTcgd/fvZN6N9CsTigKpaKNDUVHi7xrFNs9rxNvFev9G8DhsFT6qjEuu55gvqEiznEekDRBongOUapgjsVDfio9kwpNDH2koOGCqDeyLTw5HtKRTxQdsitdKDH9PukDsDSY9gzOc/KG20DSXG/fl9Uio/tXdTdiKDHn2abnRe+d8Tbl1XvSoPISPr0QCAdhb5SkXIBusjMrFsR9eK5cgmitnEkQRFwTzI+SmUMQ6JmRbXX18ly5BJw9XNBI2GlouDAgW9pTXQQSRPje8m+ltVy5AruGMdJIGuwjv5+CC/gtMtkd9o74/L0SrkAHcLa0xqBpz1IF52j3pzOH5Rma6xJsRpHn3+5IuQMZSzanXS2lyPkn0aIfDTI7Oo3giJXLkFXVoDUT7QHr+q9D+yroZh61N2LrjrMjy1lMjsAiO278WthoO9KuQeq/sTXTN/h4QoVfhTDYWvsNIvZcuQRv7Na0kAm/6oRoZTAOq5cgk0mRup9FyRcgz/AE14RTe1leAHgilMatIc4T4Gf9yRcuQf/9k=',
    imageAlt: 'Hồ Chí Minh với thiếu nhi trong ảnh tư liệu',
    evidence: [
      'Câu nói rất nổi tiếng của Hồ Chí Minh: “Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”',
      'Sau Cách mạng Tháng Tám, Người nêu rất rõ 4 việc cấp thiết: làm cho dân có ăn, có mặc, có chỗ ở, có học hành.'
    ],
  },
  {
    number: '03',
    title: 'Độc lập dân tộc phải là độc lập thật sự, hoàn toàn, triệt để',
    content:
      'Hồ Chí Minh phản đối kiểu “độc lập giả hiệu” do thực dân dựng lên. Người yêu cầu độc lập phải là độc lập thật sự, tức là dân tộc phải có quyền tự quyết hoàn toàn.',
    image:
      'https://image.plo.vn/w850/Uploaded/2026/cqjwqcdwp/2015_05_19/4-chot_WVJP.jpg.webp',
    imageAlt: 'Biểu tượng chủ quyền và quyền tự quyết dân tộc',
    bullets: [
      'Không tự quyết được ngoại giao',
      'Không có quân đội riêng',
      'Không có tài chính riêng'
    ],
  },
  {
    number: '04',
    title: 'Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ',
    content:
      'Theo Hồ Chí Minh, độc lập dân tộc không thể tách rời thống nhất đất nước và toàn vẹn lãnh thổ.',
    image:
      'https://preview.redd.it/h%E1%BB%93-ch%C3%AD-minh-l%C3%A0-t%C3%A1c-nh%C3%A2n-ch%C3%ADnh-khi%E1%BA%BFn-ph%C3%A1p-bu%E1%BB%99c-ph%E1%BA%A3i-%C4%91%E1%BB%95-b%E1%BB%99-v0-hmafvadb996d1.jpg?width=350&format=pjpg&auto=webp&s=97925c2cd7612aabfd3a76b87edd5c5a53be9b34',
    imageAlt: 'Hình ảnh biểu tượng cho độc lập, thống nhất và toàn vẹn lãnh thổ',
    evidence: [
      'Hồ Chí Minh khẳng định: “Nước Việt Nam là một, dân tộc Việt Nam là một.”',
      'Trong thư gửi đồng bào Nam Bộ trước khi sang Pháp đàm phán năm 1946, Người nói: “Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.”'
    ],
  }
];

const lifeTimeline = [
  {
    label: 'Mục tiêu cao nhất',
    quote:
      '“Làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.”',
    text:
      'Gọi độc lập dân tộc là “lẽ sống” vì đó là mục tiêu cao nhất mà Hồ Chí Minh theo đuổi suốt cuộc đời.'
  },
  {
    label: 'Ý chí hy sinh',
    quote:
      '“Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.”',
    text:
      'Trong kháng chiến chống Pháp, lời khẳng định ấy cho thấy độc lập dân tộc là giới hạn không thể nhân nhượng.'
  },
  {
    label: 'Chân lý thời đại',
    quote: '“Không có gì quý hơn độc lập, tự do.”',
    text:
      'Năm 1965, Hồ Chí Minh nêu lên chân lý có sức lay động sâu rộng đối với nhân dân Việt Nam và các dân tộc yêu chuộng tự do trên thế giới.'
  }
];

const doctrineCards = [
  {
    sticker: '01',
    title: 'Có quan niệm rõ ràng về nội dung độc lập',
    points: [
      'Độc lập là quyền thiêng liêng của mọi dân tộc.',
      'Độc lập phải thật sự, không hình thức.',
      'Độc lập gắn với tự do, hạnh phúc của nhân dân.',
      'Độc lập gắn với thống nhất đất nước.'
    ]
  },
  {
    sticker: '02',
    title: 'Có con đường thực hiện rất rõ',
    points: [
      'Đi theo con đường cách mạng vô sản.',
      'Có Đảng Cộng sản lãnh đạo.',
      'Dựa vào đại đoàn kết toàn dân.',
      'Kết hợp đấu tranh chính trị và vũ trang khi cần thiết.'
    ],
    evidence:
      'Dẫn chứng: lựa chọn con đường cách mạng vô sản sau khi tiếp cận Vladimir Lenin; thành lập Đảng Cộng sản Việt Nam; chủ trương đại đoàn kết toàn dân.'
  }
];

const doctrineCardsMore = [
  {
    sticker: '03',
    title: 'Được thực tiễn chứng minh là đúng',
    points: [
      'Cách mạng Tháng Tám năm 1945.',
      'Thắng lợi kháng chiến chống Pháp.',
      'Thắng lợi kháng chiến chống Mỹ.'
    ]
  },
  {
    sticker: 'Tổng',
    title: 'Kết luận học thuyết',
    points: [
      'Tư tưởng độc lập dân tộc của Hồ Chí Minh không phải cảm hứng nhất thời.',
      'Đó là một hệ thống lý luận nhất quán.',
      'Có nội dung, có phương pháp và được thực tiễn lịch sử kiểm nghiệm.'
    ]
  }
];

const strengthCards = [
  {
    title: 'Xác định đúng mục tiêu lớn nhất của dân tộc',
    text:
      'Độc lập dân tộc là khát vọng lớn nhất của nhân dân Việt Nam sau hàng chục năm mất nước. Khi Hồ Chí Minh đặt đúng mục tiêu ấy lên hàng đầu, Người đã quy tụ được lòng dân.',
  },
  {
    title: 'Khơi dậy mạnh mẽ lòng yêu nước và ý chí hy sinh',
    text:
      'Tư tưởng độc lập dân tộc của Hồ Chí Minh có sức cổ vũ mạnh mẽ, thôi thúc toàn dân đứng lên đấu tranh vì tự do, độc lập.',
  },
  {
    title: 'Gắn độc lập với quyền lợi thiết thực của nhân dân',
    text:
      'Khi nhân dân hiểu rằng giành độc lập là để được sống tự do, có cơm ăn áo mặc, có học hành, có tương lai, thì cách mạng trở thành sự nghiệp của toàn dân.',
    evidence:
      'Dẫn chứng: Sau năm 1945, chính sách chống đói, chống dốt, cải thiện đời sống được triển khai rộng rãi.',
  },
  {
    title: 'Chỉ ra con đường cách mạng đúng',
    text:
      'Hồ Chí Minh không chỉ nói “phải giành độc lập”, mà còn chỉ ra làm thế nào để giành được độc lập: phải có Đảng lãnh đạo, phải đại đoàn kết toàn dân, lấy công nông làm nền tảng, phải chủ động sáng tạo và kết hợp đúng hình thức đấu tranh.',
  }
];

const worldCards = [
  {
    title: '1. Quyền độc lập là quyền chung của mọi dân tộc',
    text:
      'Hồ Chí Minh không nói cho riêng Việt Nam, mà nói cho tất cả các dân tộc thuộc địa: dân tộc nào cũng có quyền độc lập, tự do.',
    quote:
      '“Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do…”'
  },
  {
    title: '2. Các dân tộc thuộc địa có thể tự giải phóng mình',
    text:
      'Đây là điểm sáng tạo rất lớn. Người cho rằng cách mạng ở thuộc địa không cần thụ động chờ cách mạng ở chính quốc, mà có thể chủ động đứng lên giành thắng lợi trước.',
    quote:
      'Hồ Chí Minh nhấn mạnh công cuộc giải phóng chỉ có thể thực hiện bằng nỗ lực của chính các dân tộc bị áp bức.'
  },
  {
    title: '3. Thắng lợi của Việt Nam là minh chứng sống động',
    text:
      'Thắng lợi của Việt Nam cho thấy một dân tộc nhỏ yếu vẫn có thể đánh bại thực dân, đế quốc nếu có đường lối đúng. Điều này cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở châu Á, châu Phi, Mỹ Latinh.',
  }
];

const revolutionCards = [
  {
    number: '01',
    title: 'Muốn thắng lợi phải đi theo con đường cách mạng vô sản',
    content:
      'Hồ Chí Minh không chọn con đường cứu nước kiểu phong kiến hay tư sản, mà chọn con đường cách mạng vô sản.',
    image: 'https://ordi.vn/wp-content/uploads/2023/05/HCM01.jpg',
    imageAlt: 'Vladimir Lenin diễn thuyết trước quần chúng',
    evidence:
      'Sau khi tiếp cận Luận cương của Lênin, Người khẳng định: muốn cứu nước, giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.',
    explanation:
      'Vì con đường này không chỉ giải phóng dân tộc, mà còn hướng đến giải phóng nhân dân lao động một cách triệt để.'
  },
  {
    number: '02',
    title: 'Cách mạng giải phóng dân tộc phải do Đảng Cộng sản lãnh đạo',
    content:
      'Theo Hồ Chí Minh, cách mạng muốn thành công phải có một đảng cách mạng đủ bản lĩnh, đủ đường lối, đủ khả năng tổ chức quần chúng.',
    image: 'https://www.thuviendongnai.gov.vn/_layouts/LacVietBIO/fckUpload/2022-4/duong-cach-menh2842022_18361.jpg',
    imageAlt: 'Ảnh tư liệu về vai trò lãnh đạo cách mạng',
    evidence: 'Trong Đường cách mệnh, Người nêu rõ: “Trước hết phải có đảng cách mệnh.”',
    explanation:
      'Đảng giữ vai trò giác ngộ quần chúng, tổ chức lực lượng, lãnh đạo cách mạng đi đúng hướng.'
  },
  {
    number: '03',
    title: 'Cách mạng phải dựa vào đại đoàn kết toàn dân, lấy công – nông làm nền tảng',
    content:
      'Hồ Chí Minh khẳng định cách mạng là sự nghiệp của quần chúng nhân dân. Phải đoàn kết mọi tầng lớp yêu nước, nhưng công nhân và nông dân là lực lượng nền tảng.',
    evidence: 'Người nói: “Cách mệnh là việc chung cả dân chúng chứ không phải việc một hai người.”',
    explanation:
      'Đây là lý do cách mạng Việt Nam trở thành phong trào toàn dân, tạo sức mạnh rất lớn trong đấu tranh.'
  }
];

const revolutionCardsMore = [
  {
    number: '04',
    title: 'Cách mạng giải phóng dân tộc phải chủ động, sáng tạo',
    content:
      'Hồ Chí Minh cho rằng các dân tộc thuộc địa không được thụ động chờ cách mạng ở chính quốc, mà phải chủ động đứng lên giành độc lập.',
    explanation:
      'Tư tưởng này khẳng định vai trò chủ thể của các dân tộc thuộc địa trong sự nghiệp tự giải phóng mình.'
  },
  {
    number: '05',
    title: 'Cách mạng giải phóng dân tộc phải dùng bạo lực cách mạng khi cần thiết',
    content:
      'Do thực dân, đế quốc dùng bạo lực để áp bức và thống trị, nên phải dùng bạo lực cách mạng để chống lại bạo lực phản cách mạng.',
    imageA: 'https://file3.qdnd.vn/data/images/0/2025/08/26/upload_2083/2608thuy46.jpg',
    imageAAlt: 'Khởi nghĩa vũ trang 1945',
    imageALabel: 'Khởi nghĩa vũ trang 1945',
    imageB: 'https://file.qdnd.vn/data/images/0/2020/05/06/nguyenthao/dien%20bien%20phu.jpg?dpi=150&quality=100&w=575',
    imageBAlt: 'Kháng chiến chống Pháp, Mỹ',
    imageBLabel: 'Kháng chiến chống Pháp, Mỹ',
    bullets: [
      'Không phải bạo lực mù quáng',
      'Là bạo lực của quần chúng',
      'Kết hợp đấu tranh chính trị với đấu tranh vũ trang',
      'Tùy hoàn cảnh mà vận dụng cho phù hợp'
    ],
    closing:
      'Bạo lực cách mạng trong tư tưởng Hồ Chí Minh luôn gắn với mục tiêu giải phóng dân tộc, có tổ chức, có định hướng và phù hợp với điều kiện lịch sử cụ thể.'
  }
];

const practiceCards = [
  {
    number: '01',
    title: 'Độc lập dân tộc hôm nay gắn với chủ quyền, bản sắc và tinh thần tự chủ',
    image:
      'https://media.vov.vn/sites/default/files/styles/large/public/2022-12/Truong%20Sa%20Xanh%204.jpg',
    imageAlt: 'Biểu tượng độc lập và chủ quyền quốc gia',
    text:
      'Trong thời đại toàn cầu hóa, độc lập dân tộc không chỉ là bảo vệ biên giới, lãnh thổ mà còn là giữ vững chủ quyền quốc gia, bản sắc văn hóa và tinh thần tự chủ của dân tộc. Điều đó đòi hỏi mỗi người Việt Nam phải biết trân trọng lợi ích chung của đất nước, tỉnh táo trước những thông tin sai lệch và không để các tác động bên ngoài làm suy giảm ý thức dân tộc.'
  },
  {
    number: '02',
    title: 'Tinh thần đoàn kết dân tộc vẫn được thể hiện rõ trong đời sống thực tế',
    image:
      'https://media1.nguoiduatin.vn/media/nguyen-thi-huong-lan/2020/10/21/dan-vung-lu-mien-trung.jpg',
    imageAlt: 'Hình ảnh tượng trưng cho tinh thần đoàn kết dân tộc',
    text:
      'Trong cuộc sống hiện nay, trên mạng xã hội có lúc con người tranh cãi, bất đồng, thậm chí công kích nhau. Tuy nhiên, khi đất nước gặp khó khăn, thiên tai, dịch bệnh hoặc những vấn đề liên quan đến lợi ích dân tộc, tinh thần đoàn kết của người Việt vẫn được khơi dậy mạnh mẽ. Điều đó cho thấy tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với đại đoàn kết vẫn còn nguyên giá trị thực tiễn trong xã hội hôm nay.'
  },
  {
    number: '03',
    title: 'Độc lập dân tộc phải gắn với đời sống của nhân dân trong bối cảnh mới',
    image:
      'https://cdnmedia.baotintuc.vn/Upload/DmtgOUlHWBO5POIHzIwr1A/files/2024/12/03/truong-tieu-hoc-Binh-Minh-03122024-02.jpg',
    imageAlt: 'Hình ảnh tượng trưng cho đời sống nhân dân và hạnh phúc con người',
    text:
      'Hồ Chí Minh luôn khẳng định độc lập phải gắn với tự do, hạnh phúc của nhân dân. Ngày nay, tư tưởng ấy vẫn có ý nghĩa rất rõ: phát triển đất nước phải hướng tới nâng cao đời sống nhân dân, mở rộng cơ hội học tập, việc làm và bảo đảm an sinh xã hội. Như vậy, độc lập dân tộc không chỉ là khái niệm chính trị, mà còn phải được thể hiện bằng chất lượng cuộc sống thực tế của con người.'
  },
  {
    number: '04',
    title: 'Trách nhiệm của sinh viên hôm nay',
    image:
      'https://bvhttdl.mediacdn.vn/291773308735864832/2021/12/21/hien-mau-1640079074728527136676.jpg',
    imageAlt: 'Hình ảnh tượng trưng cho trách nhiệm công dân và lý tưởng học tập',
    text:
      'Đối với sinh viên, vận dụng tư tưởng Hồ Chí Minh không chỉ là học thuộc lý luận mà còn là sống có trách nhiệm với cộng đồng và đất nước. Điều đó thể hiện ở việc học tập nghiêm túc, rèn luyện bản thân, sử dụng mạng xã hội một cách văn minh, không lan truyền thông tin sai lệch, biết đặt lợi ích chung của dân tộc lên trên những tranh cãi nhỏ hẹp và sẵn sàng đóng góp cho xã hội bằng năng lực của mình.'
  }
];

const quoteGallery = [
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ba%20Dinh%20Square%20September%202nd,%201945.jpg',
    quote: '“Không có gì quý hơn độc lập, tự do.”',
    note: 'Chân lý thời đại gắn với sức mạnh tinh thần của dân tộc Việt Nam.'
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Vo%20Nguyen%20Giap%20and%20Ho%20Chi%20Minh%201945.jpg',
    quote: '“Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.”',
    note: 'Lời hiệu triệu khơi dậy ý chí chiến đấu và tinh thần quyết tử cho độc lập.'
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ho-chi-Minh%20with%20children%20%281%29.jpg',
    quote: '“Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”',
    note: 'Độc lập phải gắn với cơm ăn, áo mặc, học hành và hạnh phúc thực sự của nhân dân.'
  }
];

const keywordTags = [
  'độc lập dân tộc',
  'tự do',
  'hạnh phúc của nhân dân',
  'thống nhất đất nước',
  'toàn vẹn lãnh thổ',
  'lẽ sống',
  'học thuyết',
  'nguồn sức mạnh chiến thắng',
  'nguồn động viên quốc tế',
  'cách mạng vô sản',
  'Đảng Cộng sản lãnh đạo',
  'đại đoàn kết toàn dân',
  'chủ động sáng tạo',
  'bạo lực cách mạng'
];

const aiTransparencyItems = [
  {
    title: 'Minh bạch',
    text:
      'Nhóm sử dụng Gemini và ChatGPT để hỗ trợ nội dung, dùng ChatGPT để hỗ trợ code và tinh chỉnh giao diện web.'
  },
  {
    title: 'Kiểm chứng',
    text:
      'Mọi nội dung đều được đối chiếu với Giáo trình HCM202 và tài liệu học phần.'
  },
  {
    title: 'Sáng tạo',
    text:
      'AI hỗ trợ nâng cao tính trực quan, thẩm mỹ và hiệu quả trình bày, nhưng ý tưởng triển khai do nhóm quyết định.'
  },
  {
    title: 'Liêm chính học thuật',
    text:
      'AI chỉ là công cụ hỗ trợ; sản phẩm cuối cùng là kết quả chọn lọc, chỉnh sửa và chịu trách nhiệm của sinh viên.'
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroWatermarkRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 16);

          if (heroWatermarkRef.current && scrollY < window.innerHeight) {
            heroWatermarkRef.current.style.transform = `translate(-50%, calc(-46% + ${scrollY * 0.08}px)) scale(1.02)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .stagger-up');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="top">
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-mark">HCM</span>
            <span className="nav-logo-copy">
              <strong>Tư tưởng Hồ Chí Minh</strong>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="#ket-luan" className="nav-cta">
            Xem kết luận
          </a>

          <button
            type="button"
            className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Mở menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="mobile-link" onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#ket-luan" className="mobile-link" onClick={closeMenu}>
          Xem kết luận
        </a>
      </div>

      <section className="hero section-light" id="hero">
        <div className="hero-dots"></div>
        <div className="hero-watermark">DOC LAP</div>
        <img
          ref={heroWatermarkRef}
          className="hero-portrait"
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Ho%20Chi%20Minh%201946.jpg"
          alt="Chân dung Hồ Chí Minh"
          loading="eager"
        />
        <div className="container hero-content">
          <h1 className="hero-title">
            <span>Tư tưởng</span>
            <span>Hồ Chí Minh</span>
          </h1>
          <p className="hero-quote">
            “Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.”
          </p>
          <div className="hero-actions">
            <a href="#phan-mot" className="button-primary">
              Khám phá nội dung
            </a>
          </div>
          <div className="hero-course-meta">
            <span className="hero-course-code">HCM202</span>
            <span className="hero-course-divider"></span>
            <span className="hero-course-lecturer">Giảng viên: Trần Duy Lâm</span>
          </div>
        </div>
      </section>

      <section className="section section-intro section-light" id="gioi-thieu">
        <div className="container">
          <div className="section-heading center reveal">
            <span className="section-label"></span>
            <h2>Giới thiệu</h2>
          </div>

          <div className="intro-layout">
            <figure className="intro-frame reveal">
              <div className="intro-image-shell">
                <img
                  src="https://image.sggp.org.vn/Uploaded/2026/Xqkbczma/831/DSC_1768.gif"
                  alt="Tượng đài Chủ tịch Hồ Chí Minh"
                  loading="lazy"
                />
              </div>
              <figcaption>Tượng đài Chủ tịch Hồ Chí Minh</figcaption>
            </figure>

            <div className="intro-copy reveal-left">
              <p className="dropcap-paragraph">
                <span className="dropcap">"K</span><strong>hông có gì quý hơn độc lập, tự do"</strong> — đây không chỉ là khẩu hiệu mà là tư tưởng cốt lõi, là chân lý bất hủ của Hồ Chí Minh. Đối với Người, độc lập dân tộc là
                <mark> quyền thiêng liêng, bất khả xâm phạm,</mark> là khát vọng cháy bỏng xuyên suốt lịch sử dựng nước và giữ nước của dân tộc.
              </p>
              <p>
                Độc lập không phải là khái niệm trừu tượng mà phải thiết thực, gắn liền với tự do, cơm no,
                áo ấm và hạnh phúc của nhân dân. Người khẳng định:
                <strong>"Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"</strong>. Tư tưởng này phản ánh tính nhân văn sâu sắc, đặt con người vào vị trí trung tâm của sự nghiệp giải phóng.
              </p>
              <p>Đó phải là nền độc lập hoàn toàn, triệt để và gắn liền với sự thống nhất, toàn vẹn lãnh thổ. Như lời Người từng căn dặn:
                "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi".</p>
              <div className="intro-signature">
                <span className="intro-signature-title">Chủ tịch nước</span>
                <span className="intro-signature-name">Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-main section-light" id="phan-mot">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần I</span>
            <h2>Tư tưởng Hồ Chí Minh về độc lập dân tộc</h2>
          </div>

          <div className="concept-stack stagger-up">
            {independenceCards.map((card) => (
              <article key={card.number} className="concept-card reveal-child">
                <div className="concept-card-top">
                  <div className="concept-number">{card.number}</div>
                  <h3>{card.title}</h3>
                </div>
                <div className="concept-card-main">
                  <div className="concept-body">
                    <p>{card.content}</p>

                    {card.evidence ? (
                      <div className="evidence-block">
                        <strong>Dẫn chứng</strong>
                        {card.evidence.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    ) : null}

                    {card.bullets ? (
                      <div className="criteria-block">
                        <strong>Dẫn chứng</strong>
                        <ul>
                          {card.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="concept-image-slot">
                    {card.image ? (
                      <img src={card.image} alt={card.imageAlt || ''} loading="lazy" />
                    ) : (
                      <div className="concept-image-placeholder">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        <strong>{`Hình ${card.number}`}</strong>
                        <small>{`https://mediagiaothong.tapchixaydung.vn/mediav2/upload/giaothong/tapchigiaothong.qltns.mediacdn.vn/tapchigiaothong.vn/files/Thuy.duong/2020/05/14/ban-yeu-sach-1436.jpg }`}</small>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-timeline section-light" id="phan-hai">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần II</span>
            <h2>Vì sao độc lập dân tộc là “lẽ sống” của Hồ Chí Minh</h2>
          </div>

          <div className="timeline-layout">
            <div className="timeline-image reveal">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Ho%20Chi%20Minh%201946.jpg"
                alt="Chân dung Hồ Chí Minh"
                loading="lazy"
              />
            </div>

            <div className="timeline-content stagger-up">
              {lifeTimeline.map((item, index) => (
                <article key={item.label} className="timeline-item reveal-child">
                  <div className="timeline-marker">
                    <span></span>
                    {index !== lifeTimeline.length - 1 ? <i></i> : null}
                  </div>
                  <div className="timeline-card">
                    <span className="timeline-kicker">{item.label}</span>
                    <blockquote>{item.quote}</blockquote>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}

              <div className="timeline-summary reveal-child">
                Vì vậy, độc lập dân tộc không chỉ là một tư tưởng Hồ Chí Minh nêu ra, mà là lý tưởng
                sống, là mục đích sống, là khát vọng lớn nhất của cả cuộc đời Người.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-values section-light" id="phan-ba">
        <div className="container">
          <div className="section-heading center reveal">
            <span className="section-label">Phần III</span>
            <h2>Vì sao có thể nói đó là “học thuyết” của Hồ Chí Minh</h2>
            <p>
              Đây không phải là cảm hứng nhất thời, mà là một hệ thống quan điểm hoàn chỉnh về bản chất
              độc lập, con đường giành độc lập, lực lượng thực hiện, phương pháp đấu tranh và mục tiêu
              sau khi giành độc lập.
            </p>
          </div>

          <div className="values-rows stagger-up">
            <article className="doctrine-row reveal-child">
              <div className="doctrine-text-card">
                <span className="paper-sticker">{doctrineCards[0].sticker}</span>
                <h3>{doctrineCards[0].title}</h3>
                <ul>
                  {doctrineCards[0].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="doctrine-row has-gallery reveal-child">
              <div className="doctrine-text-card">
                <span className="paper-sticker">{doctrineCards[1].sticker}</span>
                <h3>{doctrineCards[1].title}</h3>
                <ul>
                  {doctrineCards[1].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="doctrine-gallery">
                <article className="doctrine-image-card">
                  <div className="doctrine-image-slot">
                    <img
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/L-Vladimir%20speaking.jpg"
                      alt="Vladimir Lenin diễn thuyết trước quần chúng"
                      loading="lazy"
                    />
                  </div>
                  <small>Lựa chọn con đường cách mạng vô sản sau khi tiếp cận Vladimir Lenin</small>
                </article>
                <article className="doctrine-image-card">
                  <div className="doctrine-image-slot">
                    <img
                      src={anh2}
                      alt="Ảnh tư liệu về thành lập Đảng Cộng sản Việt Nam"
                      loading="lazy"
                    />
                  </div>
                  <small>Thành lập Đảng Cộng sản Việt Nam</small>
                </article>
                <article className="doctrine-image-card">
                  <div className="doctrine-image-slot">
                    <img
                      src={anh3}
                      alt="Ảnh tư liệu về chủ trương đại đoàn kết toàn dân"
                      loading="lazy"
                    />
                  </div>
                  <small>Chủ trương đại đoàn kết toàn dân</small>
                </article>
              </div>
            </article>

            <article className="doctrine-row reveal-child">
              <div className="doctrine-text-card doctrine-proof-card">
                <span className="paper-sticker">{doctrineCardsMore[0].sticker}</span>
                <h3>{doctrineCardsMore[0].title}</h3>

                <div className="doctrine-proof-grid">
                  <article className="proof-card">
                    <h4>Cách mạng Tháng Tám năm 1945</h4>
                    <div className="proof-image-slot">
                      <img
                        src="https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%ADt%20tinh%20ch%C3%A0o%20m%E1%BB%ABng%20C%C3%A1ch%20m%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%20n%C4%83m%201945%20th%C3%A0nh%20c%C3%B4ng%20t%E1%BA%A1i%20Nh%C3%A0%20h%C3%A1t%20L%E1%BB%9Bn%20H%C3%A0%20N%E1%BB%99i.jpg"
                        alt="Mít tinh chào mừng Cách mạng Tháng Tám năm 1945 thành công tại Nhà hát Lớn Hà Nội"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="proof-card">
                    <h4>Thắng lợi kháng chiến chống Pháp</h4>
                    <div className="proof-image-slot">
                      <img
                        src="https://commons.wikimedia.org/wiki/Special:FilePath/Victory_in_Battle_of_Dien_Bien_Phu.jpg"
                        alt="Chiến thắng Điện Biên Phủ năm 1954"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="proof-card">
                    <h4>Thắng lợi kháng chiến chống Mỹ</h4>
                    <div className="proof-image-slot">
                      <img
                        src="https://s3-hn-2.cloud.cmctelecom.vn/vietnam/resource/IMAGE/2025/1/18/ce0fed8b635b4d5fa11e959e827c4b22"
                        alt="Xe tăng tiến vào Dinh Độc Lập, thắng lợi kháng chiến chống Mỹ"
                        loading="lazy"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </article>

            <article className="doctrine-summary-row reveal-child">
              <div className="doctrine-text-card summary">
                <span className="paper-sticker">{doctrineCardsMore[1].sticker}</span>
                <h3>{doctrineCardsMore[1].title}</h3>
                <ul>
                  {doctrineCardsMore[1].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-gallery section-dark" id="phan-bon">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần IV</span>
            <h2>Nguồn sức mạnh làm nên chiến thắng của nhân dân Việt Nam</h2>
          </div>

          <div className="strength-grid stagger-up">
            {strengthCards.map((card, index) => (
              <article key={card.title} className="strength-card reveal-child">
                <div className="strength-top">
                  <span className="strength-index">0{index + 1}</span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.text}</p>
                {card.quote ? <blockquote>{card.quote}</blockquote> : null}
                {card.evidence ? <div className="strength-evidence">{card.evidence}</div> : null}
                {card.closing ? <div className="strength-closing">{card.closing}</div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-world section-dark" id="phan-nam">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần V</span>
            <h2>Vì sao đây là “nguồn động viên các dân tộc bị áp bức trên thế giới”</h2>
            <p>
              Ở cấp độ quốc tế, tư tưởng Hồ Chí Minh nâng vấn đề độc lập dân tộc từ câu chuyện của Việt
              Nam thành một thông điệp chung cho các dân tộc thuộc địa và bị áp bức.
            </p>
          </div>

          <div className="world-grid stagger-up">
            {worldCards.map((card) => (
              <article key={card.title} className="world-card reveal-child">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.quote ? <blockquote>{card.quote}</blockquote> : null}
                {card.closing ? <div className="closing-note dark">{card.closing}</div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-revolution section-light" id="phan-sau">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần VI</span>
            <h2>Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc</h2>
          </div>

          <div className="revolution-grid horizontal stagger-up">
            {[...revolutionCards, ...revolutionCardsMore].map((card) => (
              <article key={card.number} className={`revolution-card reveal-child ${card.image ? 'has-image' : 'no-image'} ${card.number === '05' ? 'double-image' : ''}`}>
                <div className="revolution-card-layout">
                  <div className="revolution-content">
                    <div className="revolution-heading-row">
                      <span className="revolution-badge">{card.number}</span>
                      <h3>{card.title}</h3>
                    </div>

                    <div className="revolution-main">
                      <p>{card.content}</p>
                    </div>

                    <div className={`revolution-detail-grid ${card.number === '05' ? 'double-image-detail-grid' : ''}`}>
                      {card.evidence ? (
                        <div className="evidence-block compact">
                          <strong>Dẫn chứng</strong>
                          <p>{card.evidence}</p>
                        </div>
                      ) : null}
                      {card.explanation ? (
                        <div className="explanation-block">
                          <strong>Giải thích</strong>
                          <p>{card.explanation}</p>
                        </div>
                      ) : null}
                      {card.bullets ? (
                        <div className="criteria-block">
                          <strong>Làm rõ cách hiểu</strong>
                          <ul>
                            {card.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {card.closing ? <div className="closing-note">{card.closing}</div> : null}
                    </div>
                  </div>

                  {card.number === '05' ? (
                    <div className="revolution-image-column">
                      <article className="revolution-image-card">
                        <div className="revolution-image-slot">
                          <img src={card.imageA} alt={card.imageAAlt || ''} loading="lazy" />
                        </div>
                        <small>{card.imageALabel}</small>
                      </article>
                      <article className="revolution-image-card">
                        <div className="revolution-image-slot">
                          <img src={card.imageB} alt={card.imageBAlt || ''} loading="lazy" />
                        </div>
                        <small>{card.imageBLabel}</small>
                      </article>
                    </div>
                  ) : card.image ? (
                    <div className="revolution-image-slot">
                      <img src={card.image} alt={card.imageAlt || ''} loading="lazy" />
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-practice section-light" id="phan-bay">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần VII</span>
            <h2>Liên hệ thực tiễn hiện nay</h2>
            <p>
              Tư tưởng Hồ Chí Minh về độc lập dân tộc và cách mạng giải phóng dân tộc không chỉ có giá
              trị trong lịch sử, mà vẫn còn ý nghĩa sâu sắc đối với đời sống Việt Nam hôm nay.
            </p>
          </div>

          <div className="practice-grid stagger-up">
            {practiceCards.map((card) => (
              <article key={card.number} className="practice-card reveal-child">
                <div className="practice-top">
                  <span className="practice-index">{card.number}</span>
                  <h3>{card.title}</h3>
                </div>
                <div className="practice-image-slot">
                  <img src={card.image} alt={card.imageAlt || ''} loading="lazy" />
                </div>
              </article>
            ))}
          </div>

          <div className="practice-summary reveal">
            Có thể nói, trong thời đại hôm nay, tư tưởng Hồ Chí Minh vẫn nhắc mỗi người Việt Nam phải giữ
            vững tinh thần độc lập, phát huy đoàn kết dân tộc và sống có trách nhiệm để góp phần xây dựng
            đất nước.
          </div>
        </div>
      </section>

      <section className="section section-conclusion section-dark" id="ket-luan">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Kết luận</span>
            <h2>Độc lập dân tộc là trục tư tưởng xuyên suốt</h2>
          </div>

          <div className="conclusion-layout">
            <div className="summary-box reveal">
              <h3>Tổng kết nội dung trọng tâm</h3>
              <p>
                Trong tư tưởng Hồ Chí Minh, độc lập dân tộc là quyền thiêng liêng của mọi dân tộc, phải
                gắn với tự do, hạnh phúc của nhân dân, phải là độc lập thật sự, hoàn toàn, triệt để và
                gắn liền với thống nhất, toàn vẹn lãnh thổ. Chính vì vậy, độc lập dân tộc trở thành lẽ
                sống, trở thành học thuyết, trở thành nguồn sức mạnh chiến thắng của nhân dân Việt Nam và
                nguồn động viên lớn lao đối với các dân tộc bị áp bức trên thế giới.
              </p>
            </div>

            <div className="final-quote reveal">
              <blockquote>“Không có gì quý hơn độc lập, tự do.”</blockquote>
              <p>
                Câu nói này không chỉ là một chân lý lịch sử, mà còn là điểm quy tụ tư tưởng, đạo lý và
                ý chí hành động trong toàn bộ sự nghiệp cách mạng của Hồ Chí Minh.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="section section-ai-transparency section-light" id="minh-bach-ai">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Minh bạch sử dụng AI</span>
            <h2>Ứng dụng AI có trách nhiệm</h2>
          </div>

          <div className="ai-transparency-grid stagger-up">
            {aiTransparencyItems.map((item, index) => (
              <article key={item.title} className="ai-transparency-card reveal-child">
                <div className="ai-transparency-head">
                  <span className="ai-transparency-badge">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">© 2026 Tư Tưởng Hồ Chí Minh.</div>
      </footer>
    </>
  );
}

export default App;
