# 获取所有png文件
$files = Get-ChildItem -Filter "*.png"

# 找到不是数字命名的文件
foreach ($file in $files) {
    if ($file.Name -notmatch "^\d+\.png$") {
        # 找到现有最大数字
        $maxNum = 0
        foreach ($existingFile in $files) {
            if ($existingFile.Name -match "^(\d+)\.png$") {
                $num = [int]$matches[1]
                if ($num -gt $maxNum) {
                    $maxNum = $num
                }
            }
        }
        
        # 使用下一个数字
        $newName = "$($maxNum + 1).png"
        Write-Host "重命名: $($file.Name) -> $newName"
        Rename-Item -Path $file.FullName -NewName $newName -Force
    }
} 