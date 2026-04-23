let budget = 1000
let tolerance = 20
let isChild = false
let isAdult = false
let isRequireDrinkSet = true

let total_cost = 0
let order_list = []

let menu_list = [
    [1202,"小エビのサラダ",350],
    [1205,"わかめのサラダ",350],
    [1209,"チキンのサラダ",350],
    [1301,"コーンクリームスープ",150],
    [1305,"田舎風ミネストローネ",300],
    [1307,"たまねぎのズッパ",300],
    [1401,"辛味チキン",300],
    [1402,"アロスティチーニ",400],
    [1403,"ほうれん草のソテー",200],
    [1404,"ポップコーンシュリンプ",300],
    [1405,"エスカルゴのオーブン焼き",400],
    [1406,"小エビのカクテル",280],
    [1407,"チョリソー",400],
    [1408,"蒸し鶏の香味ソース",280],
    [1410,"ムール貝のガーリック焼き",400],
    [1413,"キャロットラベ",200],
    [1416,"ポテトのグリル",300],
    [1417,"バッファローモッツァレラのカプレーゼ",430],
    [1422,"生ハム",320],
    [1423,"生ハムとバッファローモッツァレラの組み合わせ",500],
    [1425,"柔らか青豆の温サラダ",200],
    [1452,"[Wサイズ] アロスティチーニ",800],
    [2101,"ミラノ風ドリア",300],
    [2103,"半熟卵のミラノ風ドリア",350],
    [2108,"焼きチーズミラノ風ドリア",350],
    [2110,"たらことポップコーンシュリンプのドリア",400],
    [2115,"ポップコーンシュリンプとたらこのクリームグラタン(全粒粉)",430],
    [2203,"バッファオーモッツァレラのマルゲリータピザ",400],
    [2204,"野菜ときのこのピザ",400],
    [2206,"たっぷりコーンのピザ",400],
    [2208,"ソーセージピザ",400],
    [2301,"タラコソースシシリー風",400],
    [2303,"ペペロンチーノ",300],
    [2304,"パルマ風スパゲッティ",400],
    [2305,"カルボナーラ",500],
    [2306,"ミートソースボロニア風",400],
    [2310,"スープ入り塩味ボンゴレ",500],
    [2316,"半熟卵のミートソースボロニア風",450],
    [2317,"半熟卵のペペロンチーノ",350],
    [2318,"半熟卵のカルボナーラ",550],
    [2320,"小エビのタラコソース",540],
    [2321,"キノコとほうれん草のクリームスパゲッティ",600],
    [2325,"ペンネアラビアータ",430],
    [2328,"イカの墨入りセピアソース",500],
    [2402,"若鶏のディアボラ風",500],
    [2403,"イタリアンハンバーグ",500],
    [2404,"柔らかチキンのチーズ焼き",500],
    [2406,"ハンバーグステーキ",400],
    [2407,"ディアボラ風ハンバーグ",500],
    [2417,"[店舗限定]ラム(仔羊)のランプステーキ",1090],
    [2418,"ミックスグリル",650],
    [2419,"[店舗限定]ビーフステーキ",1090],
    [3101,"ライス",150],
    [3102,"ラージライス",200],
    [3103,"スモールライス",100],
    [3110,"フォッカチオ",150],
    [3111,"ガーリックフォッカチオ",200],
    [3112,"シナモンフォッカチオ",200],
    [3113,"タラコフォッカチオ",250],
    [3114,"チーズフォッカチオ",250],
    [3201,"ティラミス クラシコ",300],
    [3205,"ミルクジェラート",250],
    [3207,"チョコレートケーキ",300],
    [3206,"イタリアンプリン",250],
    [3212,"プリンとティラミス クラシコの盛り合わせ",500],
    [3213,"トリフアイスクリーム",350],
    [3214,"ジェラート＆シナモンフォッカチオ",450],
    [3215,"コーヒーゼリー＆ミルクジェラート",350],
    [3216,"チョコレートケーキ&ミルクジェラート",500],
    [3301,"生ビールキリン一番搾り ジョッキ",400],
    [3302,"生ビールキリン一番搾り グラスビール",280],
    [3303,"ノンアルコールビール アサヒ ドライゼロ",250],
    [3304,"キリン 氷結 シチリア産レモン",350],
    [3306,"グラッパ(30ml)",300],
    [3401,"グラスワイン 赤",100],
    [3402,"グラスワイン 白",100],
    [3403,"デカンタ小 赤",200],
    [3404,"デカンタ小 白",200],
    [3405,"デカンタ大 赤",400],
    [3406,"デカンタ大 白",400],
    [3407,"マグナム 赤",1100],
    [3408,"マグナム 白",1100],
    [3413,"ドンラファエロ",1100],
    [3412,"ランブルスコロゼ",1100],
    [3414,"ランブルスコセッコ",1100],
    [3415,"ベルデッキオ",1100],
    [3416,"キャンティ",1100],
    [3419,"キャンティ ルフィナ",2200],
    [4301,"トッピング半熟卵",50],
    [4304,"トッピング野菜ソース",100],
    [4307,"トッピング粉チーズ",100],
    [5101,"セットドリンクバー",200],
    [5102,"[キッズ] ドリンクバー",100],
    [5103,"[単品] ドリンクバー",300],
    [5305,"サイゼリヤドレッシング",500],
    [5306,"エクストラ・バージン・オリーブオイル(500ml)",1200]
]

// ここにコードを入力
function isFitBudget(budget, total_cost){
    if ( total_cost >= budget + tolerance){
        return false  // 総額が高すぎる
    }else if ( total_cost <= budget - tolerance){
        return false  // 総額が安すぎる
    }else{
        return true  // 総額が高すぎず安すぎない=適する
    }
}

function isMainDish(menu_id){
    // メイン料理かどうかを判定
    return 2000 <= menu_id && menu_id < 3000
}

function isSideDish(menu_id){
    // 副菜かどうかを判定（除外：アルコール、ドリンク関連）
    return (1000 <= menu_id && menu_id < 2000) ||
           (3000 <= menu_id && menu_id < 3300) ||
           (4000 <= menu_id && menu_id < 5000)
}

function getDrinkByRequirement(){
    // isRequireDrinkSetとisChildに基づいて、必要なドリンクを取得
    if ( isRequireDrinkSet ){
        if ( !isChild ){  // 大人: セットドリンクバー(5101)
            return menu_list.find(item => item[0] == 5101)
        }else{  // 子供: キッズドリンクバー(5102)
            return menu_list.find(item => item[0] == 5102)
        }
    }
    return null
}

function getRandomMainDish(){
    // メイン料理（2000番台）をランダムに取得
    let main_dishes = menu_list.filter(item => isMainDish(item[0]))
    return main_dishes[Math.floor(Math.random() * main_dishes.length)]
}

function getRandomSubDish(){
    // 副菜をランダムに取得
    let sub_dishes = menu_list.filter(item => isSideDish(item[0]))
    return sub_dishes[Math.floor(Math.random() * sub_dishes.length)]
}

for( let i = 0; i < 1000; i++ ){  // 最大で1000回試行
    total_cost = 0
    order_list = []
    
    // ステップ1: 必要なドリンクバーを先に確定
    let required_drink = getDrinkByRequirement()
    let drink_cost = 0
    let drink_menu_id = 0
    
    if ( required_drink != null ){
        drink_cost = required_drink[2]
        drink_menu_id = required_drink[0]
        order_list.push(required_drink[1])
        total_cost += drink_cost
    }
    
    // ステップ2: メイン料理を優先的に注文
    let remaining_budget = budget - tolerance - total_cost
    let main_count = 0
    
    while ( remaining_budget > 0 ){
        let main = getRandomMainDish()
        // 大人でない場合、アルコールは注文不可（アルコールはメニュー番号3300-4000）
        if ( !isAdult && 3300 <= main[0] && main[0] < 4000 ){
            continue
        }
        
        if ( total_cost + main[2] <= budget - tolerance ){
            order_list.push(main[1])
            total_cost += main[2]
            remaining_budget = budget - tolerance - total_cost
            main_count++
        }else{
            break
        }
    }
    
    // ステップ3: 副菜を追加（ドリンク変更の可能性を考慮）
    // メインが入らなかった場合、単品ドリンクに変更できる可能性があるため、
    // その追加金額を先読みして、副菜の上限を調整
    let potential_drink_increase = 0
    if ( required_drink != null && main_count == 0 ){
        let single_drink = menu_list.find(item => item[0] == 5103)
        if ( single_drink != null ){
            potential_drink_increase = single_drink[2] - drink_cost
        }
    }
    
    while ( total_cost < budget - tolerance ){
        let sub = getRandomSubDish()
        
        // 副菜を追加しても、ドリンク変更後も予算内に収まることを確認
        if ( total_cost + sub[2] + potential_drink_increase <= budget + tolerance ){
            order_list.push(sub[1])
            total_cost += sub[2]
        }else{
            break
        }
    }
    
    // ステップ4: メイン料理が入らなかった場合、ドリンクバーを単品に変更して予算調整
    // （メイン料理が入っている場合は、セットドリンクのまま保持）
    if ( required_drink != null && main_count == 0 ){
        // メイン料理が入らなかった場合のみ、単品ドリンクに変更を試みる
        let single_drink = menu_list.find(item => item[0] == 5103)
        
        if ( single_drink != null ){
            let drink_price_diff = single_drink[2] - drink_cost
            
            if ( total_cost + drink_price_diff <= budget + tolerance ){
                // ドリンクを単品に変更
                for ( let j = 0; j < order_list.length; j++ ){
                    if ( order_list[j] == required_drink[1] ){
                        order_list[j] = single_drink[1]
                        total_cost += drink_price_diff
                        break
                    }
                }
            }
        }
    }
    
    // ステップ5: 条件をチェック
    if( isFitBudget(budget, total_cost) && main_count > 0 ){
        break
    }
}

if ( order_list.length > 0 ){
    console.log("注文: " + order_list)
    console.log("合計: " + total_cost + "円")
}else{
    console.log("注文可能なメニューが生成できませんでした")
}
